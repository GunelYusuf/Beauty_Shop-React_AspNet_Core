using System;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class Comment:BaseEntity
    {
       public Guid UserId { get; set; }

       public AppUser User { get; set; }

       public string Message { get; set; }

       public DateTime CommentDate { get; set; } = DateTime.Now;

       public int Rating { get; set; }

       public Guid ProductId { get; set; }

       public Product Product { get; set; }

    }
}
