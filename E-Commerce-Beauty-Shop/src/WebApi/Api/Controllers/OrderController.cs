using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Api.Extensions;
using E_Commerce_Beauty_Shop.Application.Dto.OrderDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IBasketRepository _basketRepository;
        private readonly IProductRepository _productRepository;
        private readonly UserManager<AppUser> _userManager;

        public OrderController(IOrderRepository orderRepository, IBasketRepository basketRepository, IProductRepository productRepository, UserManager<AppUser> userManager)
        {
            _orderRepository = orderRepository;
            _basketRepository = basketRepository;
            _productRepository = productRepository;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderDto>>> GetOrders()
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;
            return await _orderRepository.GetAll()
                .ProjectOrderToOrderDto()
                .Where(x => x.BuyerId == Guid.Parse(userId)).ToListAsync();
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<Order>> Get(Guid id)
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;

            return await _orderRepository.GetWhere(x => x.BuyerId == Guid.Parse(userId) && x.Id == id).Include(o => o.OrderItems).FirstOrDefaultAsync();

        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateOrder(CreateOrderDto orderDto)
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;

            var basket = await _basketRepository.GetWhere(b => b.BuyerId == userId).Include(i => i.Items)
                .ThenInclude(p => p.Product).FirstOrDefaultAsync();


            if (basket == null) return BadRequest(new ProblemDetails { Title = "Could not locate basket" });

            var items = new List<OrderItem>();

            foreach (var item in basket.Items)
            {
                var productItem = await _productRepository.GetWhere(x => x.Id == item.ProductId).Include(p => p.productPhotos).FirstOrDefaultAsync();
                var itemOrdered = new ProductItemOrdered
                {
                    ProductId = productItem.Id,
                    Name = productItem.Name,
                    PictureUrl = productItem.productPhotos.Select(x => x.PhotoUrl).First()
                };

                var orderItem = new OrderItem
                {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity,
                };
                items.Add(orderItem);
                productItem.Quantity -= item.Quantity;
            }

            var subtotal = items.Sum(item => item.Price * item.Quantity);
            var order = new Order
            {
                OrderItems = items,
                BuyerId = Guid.Parse(userId),
                ShippingAddress = orderDto.ShippingAdress,
                SubTotal = subtotal,
                
            };

            var result = await _orderRepository.AddAsync(order);
            await _basketRepository.DeleteAsync(basket);

            if (orderDto.SaveAdress)
            {
                var user = await _userManager.Users.Include(a => a.Address)
                   .FirstOrDefaultAsync(x => x.Id == Guid.Parse(userId));
                var adress = new UserAddress
                {
                    FullName = orderDto.ShippingAdress.FullName,
                    Adress1 = orderDto.ShippingAdress.Adress1,
                    Adress2 = orderDto.ShippingAdress.Adress2,
                    City = orderDto.ShippingAdress.City,
                    State = orderDto.ShippingAdress.State,
                    Zip = orderDto.ShippingAdress.Zip,
                    Country = orderDto.ShippingAdress.Country,
                };
                user.Address = adress;

            }
           

            if (result) return CreatedAtRoute("GetOrder", new { id = order.Id }, order.Id);

            return BadRequest("Problem Creating Order");
        }

    }
}
