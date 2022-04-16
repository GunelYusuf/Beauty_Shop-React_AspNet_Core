using System;
namespace E_Commerce_Beauty_Shop.Application.Dto.CommentDto
{
    public class CommentResponseDto
    {
        public Guid Id { get; set; }

        public string Message { get; set; }

        public DateTime CommentDate { get; set; }

        public string FullName { get; set; }

        public int Rating { get; set; }

        public Guid ProductId { get; set; }

        public string ProductName { get; set; }
    }
}
