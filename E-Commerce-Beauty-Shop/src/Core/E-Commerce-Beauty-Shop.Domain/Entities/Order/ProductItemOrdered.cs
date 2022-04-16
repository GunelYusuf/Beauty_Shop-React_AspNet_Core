using System;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Domain.Entities.Order
{
    [Owned]
    public class ProductItemOrdered
    {
        public Guid ProductId { get; set; }

        public string Name { get; set; }

        public string PictureUrl { get; set; }
    }
}
