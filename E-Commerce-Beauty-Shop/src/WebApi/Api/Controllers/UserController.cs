using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto;
using E_Commerce_Beauty_Shop.Application.Dto.UserDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController:Controller
    {
        private readonly IConfiguration _config;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IBasketRepository _basketRepository;
        private readonly IProductImageRepository _productImageRepository;
        private readonly ITokenServiceRepository _tokenService;
        private readonly IMapper _mapper;

        public UserController(UserManager<AppUser> userManager, RoleManager<Role> roleManager, IMapper mapper, IConfiguration config, ITokenServiceRepository tokenService, IBasketRepository basketRepository, IProductImageRepository productImageRepository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _config = config;
            _tokenService = tokenService;
            _basketRepository = basketRepository;
            _productImageRepository = productImageRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLoginDto)
        {
            var user = await _userManager.FindByEmailAsync(userLoginDto.Email);

            if (user is null)
            {
                return NotFound(
                new ResponseDto
                {   Status = "404",
                    Message = "Invalid password or email address!"
                });
            }

            var response = await _userManager.CheckPasswordAsync(user, userLoginDto.Password);

            if (response)
            {
                var userBasket = await RetrieveBasket(user.Id.ToString());

                var anonymousBasket = await RetrieveBasket(Request.Cookies["buyerId"]);

                if (anonymousBasket != null)
                {
                    if (userBasket != null) await _basketRepository.DeleteAsync(userBasket);
                    anonymousBasket.BuyerId = user.Id.ToString();
                    Response.Cookies.Delete("buyerId");
                    await _basketRepository.SaveAsync();
                }
                var token = _tokenService.GenerateToken(user);

                return Ok(
                new LoginResponseDto
                {
                    Status = "200",
                    Message = $"User with the username {user.UserName} has successfully logged in!",
                    Token = await token,
                    Username = user.UserName,
                    Basket = anonymousBasket != null ? MapBasketToDto(anonymousBasket) : userBasket != null ? MapBasketToDto(userBasket) : default
                });
            }
            else
            {
                return Unauthorized(new LoginResponseDto
                {
                    Status = "401",
                    Message = "Invalid password or email address!"
                });
            }

        }

        [HttpPost]
        public async Task<ActionResult> Register(UserRegisterDto userRegisterDto)
        {
            var isExist = await _userManager.FindByEmailAsync(userRegisterDto.Email);

            if (isExist is not null)
            {
                return Conflict(new ResponseDto
                {
                    Status = "409",
                    Message = "This email already exists"
                });
            }

            AppUser user = new AppUser()
            {
                Email = userRegisterDto.Email,
                UserName = Guid.NewGuid().ToString(),
            };

            var result = await _userManager.CreateAsync(user, userRegisterDto.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Member");

                return Ok(new ResponseDto
                {
                    Status = "200",
                    Message = $"User with the username {user.UserName} has successfully registered"
                });
            }
            else
            {
                return Unauthorized(new ResponseDto
                {
                    Status = "401",
                    Message = "Unexpected error occured!"
                });
            }
        }


        private async Task<Basket> RetrieveBasket(string buyerId)
        {
            if (string.IsNullOrEmpty(buyerId))
            {
                Response.Cookies.Delete("buyerId");
                return null;
            }

            return await _basketRepository.GetSingle(p => p.BuyerId == buyerId);
        }

        private string GetBuyerId()
        {
            var userId = GetIdentityUserId();
            return userId ?? Request.Cookies["buyerId"];
        }

        private string GetIdentityUserId()
        {
            string userId = null;
            if (User.Identity.IsAuthenticated)
            {
                userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;
            }
            return userId;
        }

        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    ImageUrl = _productImageRepository.GetWhere(x => x.ProductId == item.ProductId && x.IsMain == true).Select(x => x.PhotoUrl).First(),
                    Quantity = item.Quantity,

                }).ToList()
            };
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserAddress>> GetSavedAddress()
        {
            var adress = await _userManager.Users.Where(x => x.Id == Guid.Parse(GetIdentityUserId()))
                .Select(user => user.Address)
                .FirstOrDefaultAsync();
            return adress;
        }



    }
}
