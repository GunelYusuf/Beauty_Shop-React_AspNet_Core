using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities.Order
{
    public class Order:BaseEntity
    {
        public Guid BuyerId { get; set; }

        public ShippingAddress ShippingAddress { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public List<OrderItem> OrderItems { get; set; }

        public double SubTotal { get; set; }

        public double Discount { get; set; }

        public double Cupon { get; set; }

        public OrderStatus OrderStatus { get; set; } = OrderStatus.Panding;

        public double GetTotal()
        {
            return SubTotal - Discount - Cupon;
        }

    }
}
