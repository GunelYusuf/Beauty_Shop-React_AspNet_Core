using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.BlockDto
{
    public class BlockCreateDto
    {
        [Required]
        public string Step { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public IFormFile File { get; set; }

        public Guid AboutId { get; set; }
    }
}
