using System;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class BlogTag:BaseEntity
    {
        public Guid BlogId { get; set; }

        public Blog Blog { get; set; }

        public Guid TagId { get; set; }

        public Tag  Tag { get; set; }
    }
}
