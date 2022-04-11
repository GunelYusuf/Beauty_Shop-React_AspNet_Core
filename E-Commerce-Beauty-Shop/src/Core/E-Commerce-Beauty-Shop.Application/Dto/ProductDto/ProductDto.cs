using System;
using System.ComponentModel.DataAnnotations;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.ProductDto
{
    public class ProductDto
    {
        [Required,MaxLength(20)]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public double Price { get; set; }

        [Required]
        public int Quantity { get; set; }

      
        public string ProductCode { get; set; }


        public bool Availibility { get; set; }

        public Guid CampaignId { get; set; }

        [Required]
        public Guid CategoryId { get; set; }

        [Required]
        public IFormFile[] files{ get; set; }

        [Required]
        public string[] ColorId { get; set; }

        [Required]
        public string[] TagId { get; set; }

    }
}
