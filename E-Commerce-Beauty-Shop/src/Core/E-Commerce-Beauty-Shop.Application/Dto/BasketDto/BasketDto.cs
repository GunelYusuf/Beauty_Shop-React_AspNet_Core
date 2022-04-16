using System;
using System.Collections.Generic;


namespace E_Commerce_Beauty_Shop.Application.Dto
{
    public class BasketDto
    {
        public Guid Id { get; set; }

        public string BuyerId { get; set; }

        public List<BasketItemDto> Items { get; set; } = new();
    }
}
