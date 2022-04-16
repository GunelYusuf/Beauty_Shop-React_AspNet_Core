using System;
using System.Linq;
using E_Commerce_Beauty_Shop.Application.Dto.OrderDto;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions
{
    public static class OrderExtensions
    {
        public static IQueryable<OrderDto> ProjectOrderToOrderDto(this IQueryable<Order> query)
        {
            return query
                .Select(order => new OrderDto
                {
                    Id = order.BuyerId,
                    BuyerId = order.BuyerId,
                    OrderDate = order.OrderDate,
                    ShippingAddress = order.ShippingAddress,
                    Cupon = order.Cupon,
                    Discount = order.Discount,
                    SubTotal = order.SubTotal,
                    OrderStatus = order.OrderStatus.ToString(),
                    Total = order.GetTotal(),
                    OrderItems = order.OrderItems.Select(item => new OrderItemDto
                    {
                        ProductId = item.ItemOrdered.ProductId,
                        Name = item.ItemOrdered.Name,
                        PictureUrl = item.ItemOrdered.PictureUrl,
                        Price = item.Price,
                        Quantity = item.Quantity
                    }).ToList()
                }).AsNoTracking();
        }
    }
}
