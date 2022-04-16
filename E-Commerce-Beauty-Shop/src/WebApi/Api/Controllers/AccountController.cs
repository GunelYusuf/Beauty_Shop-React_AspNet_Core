using System;
using System.Collections.Generic;
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
using Microsoft.Extensions.Configuration;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly ITokenServiceRepository _tokenService;
        private readonly IMapper _mapper;
        private readonly IBasketRepository _basketRepository;
        private readonly IProductImageRepository _productImageRepository;
        public AccountController(UserManager<AppUser> userManager, RoleManager<Role> roleManager, IMapper mapper, IConfiguration config, ITokenServiceRepository tokenService, IBasketRepository basketRepository, IProductImageRepository productImageRepository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _config = config;
            _tokenService = tokenService;
            _basketRepository = basketRepository;
            _productImageRepository = productImageRepository;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<AppUserDto>> Profile()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;

            if (userId is null)
                return Unauthorized();

            var user = await _userManager.FindByIdAsync(userId.ToString());


            if (user is null)
                return NotFound();
            var userBasket = await RetrieveBasket(userId);
            var userDto = _mapper.Map<AppUserDto>(user);
            userDto.Basket = MapBasketToDto(userBasket);
            return Ok(userDto);
        }


        private async Task<Basket> RetrieveBasket(string buyerId)
        {
           return await _basketRepository.GetSingle(p => p.BuyerId == buyerId);
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
    }
}
