using System;
using Microsoft.AspNetCore.Http;

namespace E_Commerce_Beauty_Shop.Application.Dto.BlockDto
{
    public class UpdateBlockDto
    {
        public Guid Id { get; set; }

        public string Step { get; set; }

        public string Title { get; set; }

        public IFormFile File { get; set; }

        public Guid AboutId { get; set; }
    }
}
