using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.BlogDto
{
    public class UpdateBlogDto
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public Guid CategoryId { get; set; }

        public Guid[] TagId { get; set; }

        public IFormFile File { get; set; }
    }
}
