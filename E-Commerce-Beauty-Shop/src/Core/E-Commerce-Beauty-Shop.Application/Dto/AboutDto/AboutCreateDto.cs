using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.AboutDto
{
    public class AboutCreateDto
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Subtitle { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string VideoUrl { get; set; }

        [Required]
        public IFormFile File { get; set; }

        public Guid[] BlockId { get; set; }
    }
}
