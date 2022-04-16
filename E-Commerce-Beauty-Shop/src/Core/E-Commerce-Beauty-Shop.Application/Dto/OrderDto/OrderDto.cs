using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;

namespace E_Commerce_Beauty_Shop.Application.Dto.OrderDto
{
    public class OrderDto
    {
        public Guid Id { get; set; }
        public Guid BuyerId { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public List<OrderItemDto> OrderItems { get; set; }
        public double SubTotal { get; set; }
        public double Discount { get; set; }
        public double Cupon { get; set; }
        public string OrderStatus { get; set; }
        public double Total { get; set; }
    }
}
