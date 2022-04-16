using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Entities;

namespace E_Commerce_Beauty_Shop.Application.Dto.ProductDto
{
    public class ProductResponseDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }

        public string ProductCode { get; set; }

        public bool Availibility { get; set; }

        public Guid? CampaignId { get; set; }
      
        public Guid CategoryId { get; set; }

        public string CategoryName { get; set; }

        public List<ProductPhoto> ProductPhoto { get; set; } = new List<ProductPhoto>();

        public List<Tag> ProductTags { get; set; } = new List<Tag>();

        public List<Color> ProductColor { get; set; } = new List<Color>();

    }
}
