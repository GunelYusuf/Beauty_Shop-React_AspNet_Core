using System;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.AboutDto
{
    public class UpdateAboutDto
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public IFormFile File { get; set; }

        public Guid[] BlockId { get; set; }
    }
}
