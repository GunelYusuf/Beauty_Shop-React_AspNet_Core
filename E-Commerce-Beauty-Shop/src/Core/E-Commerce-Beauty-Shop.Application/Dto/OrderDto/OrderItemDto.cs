using System;
namespace E_Commerce_Beauty_Shop.Application.Dto.OrderDto
{
    public class OrderItemDto
    {
        public Guid ProductId { get; set; }

        public string Name { get; set; }

        public string PictureUrl { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }

    }
}
