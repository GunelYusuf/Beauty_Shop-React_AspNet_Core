using System;
using System.ComponentModel.DataAnnotations.Schema;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    [Table("BasketItem")]
    public class BasketItem:BaseEntity
    {
        public int Quantity { get; set; }

        public Guid ProductId { get; set; }

        public Product Product { get; set; }

        public Guid BasketId { get; set; }

        public Basket Basket { get; set; }
    }
}
