using System;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class ProductColor:BaseEntity
    {
        public Guid ProductId { get; set; }
        public Product? Product { get; set; }
        public Guid ColorId { get; set; }
        public Color? Color { get; set; } 
        
    }
}