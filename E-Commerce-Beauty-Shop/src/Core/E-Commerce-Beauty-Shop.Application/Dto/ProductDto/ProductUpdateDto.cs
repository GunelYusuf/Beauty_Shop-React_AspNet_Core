using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.ProductDto
{
    public class ProductUpdateDto
    {
        public Guid Id { get; set; }


        [Required, MaxLength(20)]
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

      
        public IFormFile[]? files { get; set; }

      
        public Guid[] ColorId { get; set; }

       
        public Guid[] TagId { get; set; }

        public Guid[]? DeletedPhotoId{ get; set; }
    }
}
