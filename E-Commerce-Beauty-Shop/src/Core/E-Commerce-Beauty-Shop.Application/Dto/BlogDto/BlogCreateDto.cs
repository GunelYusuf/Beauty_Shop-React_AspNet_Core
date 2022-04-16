using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.BlogDto
{
    public class BlogCreateDto
    {
        [Required]
        [StringLength(250)]
        public string Title { get; set; }

        [Required]
        [MinLength(100)]
        public string Description { get; set; }

        [Required]
        public Guid CategoryId { get; set; }

        [Required,MinLength(3)]
        public Guid[] TagId { get; set; }

        [Required]
        public IFormFile File { get; set; }
    }
}
