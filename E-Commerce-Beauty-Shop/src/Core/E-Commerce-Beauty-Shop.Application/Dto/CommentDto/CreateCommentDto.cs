using System;
namespace E_Commerce_Beauty_Shop.Application.Dto.CommentDto
{
    public class CreateCommentDto
    {
      

        public string Message { get; set; }

        public int Rating { get; set; }

        public Guid ProductId { get; set; }

        

    }
}
