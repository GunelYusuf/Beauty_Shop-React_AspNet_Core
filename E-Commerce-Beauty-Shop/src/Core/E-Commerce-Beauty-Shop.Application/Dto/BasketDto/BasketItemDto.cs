using System;

namespace E_Commerce_Beauty_Shop.Application.Dto
{
    public class BasketItemDto
    {
        public Guid ProductId { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public string ImageUrl { get; set; }

        public string Category { get; set; }

        public int Quantity { get; set; }

    }
}