using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Entities;

namespace E_Commerce_Beauty_Shop.Application.Dto.AboutDto
{
    public class AboutResponseDto
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Description { get; set; }

        public string VideoUrl { get; set; }

        public string ImageUrl { get; set; }
    }
}
