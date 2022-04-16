using System;
namespace E_Commerce_Beauty_Shop.Application.Dto.BlockDto
{
    public class BlockResponseDto
    {
        public Guid Id { get; set; }

        public string Step { get; set; }

        public string Title { get; set; }

        public string IconUrl { get; set; }

        public Guid AboutId { get; set; }
    }
}
