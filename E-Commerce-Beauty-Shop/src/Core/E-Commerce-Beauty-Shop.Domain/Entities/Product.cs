using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class Product:BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; } 
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string ProductCode { get; set; }
        public bool Availibility { get; set; }
        public Guid CampaignId { get; set; }
        public Campaign Campaign { get; set;}
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }

        public List<ProductTag> productTags { get; set; }
        public List<ProductColor> productColors { get; set; }
        public List<Comment> Comments { get; set; }
        public List<ProductPhoto> productPhotos { get; set; }
        
    }
}