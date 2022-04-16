using System;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;

namespace E_Commerce_Beauty_Shop.Application.Dto.OrderDto
{
    public class CreateOrderDto
    {
        public bool SaveAdress { get; set; }

        public ShippingAddress ShippingAdress { get; set; }
    }
}
