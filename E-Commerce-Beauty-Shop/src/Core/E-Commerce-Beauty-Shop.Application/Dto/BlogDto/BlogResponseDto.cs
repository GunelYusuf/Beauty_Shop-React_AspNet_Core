using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Entities;

namespace E_Commerce_Beauty_Shop.Application.Dto.BlogDto
{
    public class BlogResponseDto
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Created { get; set; }

        public Guid CategoryId { get; set; }

        public string CategoryName { get; set; }

        public string ImageUrl { get; set; }

        public List<Tag> BlogTags { get; set; } = new List<Tag>();
    }
}
