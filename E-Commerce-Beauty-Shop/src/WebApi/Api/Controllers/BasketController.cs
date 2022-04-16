using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Dto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
    public class BasketController : ControllerBase
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IProductRepository _productRepository;
        private readonly IProductImageRepository _productImageRepository;

        public BasketController(IBasketRepository basketRepository, IProductRepository productRepository, IProductImageRepository productImageRepository)
        {
            _basketRepository = basketRepository;
            _productRepository = productRepository;
            _productImageRepository = productImageRepository;
        }


        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket(GetBuyerId());
            if (basket == null) return NotFound();

            return MapBasketToDto(basket);
        }

    
        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(Guid productId, int quantity)
        {
            var basket = await RetrieveBasket(GetBuyerId());
            if (basket == null) basket = CreatedBasket();

            var product = await _productRepository.GetById(productId.ToString());
          
            if (product == null) return NotFound();

            basket.AddItem(product, quantity);

            var result = await _basketRepository.SaveAsync() > 0;
            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

            return BadRequest(new ProblemDetails { Title = "Problem saving item to basket" });
        }


        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(Guid productId, int quantity)
        {
            var basket = await RetrieveBasket(GetBuyerId());
            if (basket == null) return NotFound();
            basket.RemoveItem(productId, quantity);
            var result = await _basketRepository.SaveAsync() > 0;
            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem removing item from baskets" });
            return StatusCode(201);
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

        private Basket CreatedBasket()
        {
            var buyerId = GetIdentityUserId();
            if (string.IsNullOrEmpty(buyerId))
            {
                buyerId = Guid.NewGuid().ToString();
                var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
                Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            }

            var basket = new Basket { BuyerId = buyerId };
            _basketRepository.AddAsync(basket);
            return basket;
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
