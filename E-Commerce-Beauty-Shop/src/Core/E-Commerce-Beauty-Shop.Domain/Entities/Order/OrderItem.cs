using System;
namespace E_Commerce_Beauty_Shop.Domain.Entities.Order
{
    public class OrderItem
    {
        public Guid Id { get; set; }

        public ProductItemOrdered ItemOrdered { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }
    }
}
