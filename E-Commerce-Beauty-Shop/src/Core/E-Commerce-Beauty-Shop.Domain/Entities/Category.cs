using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class Category:BaseEntity
    {
        public string? Name { get; set; }
        public bool IsMain { get; set; }
        
        public bool IsFeature { get; set; }
        public bool IsDeleted { get; set; }
       
       
        public List<Product>? Products { get; set; }
    }
}