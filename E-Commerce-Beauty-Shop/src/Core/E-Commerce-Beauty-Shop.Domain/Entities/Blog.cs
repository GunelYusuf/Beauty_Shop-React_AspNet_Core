using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class Blog:BaseEntity
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Created { get; set; }

        public Guid CategoryId { get; set; }

        public Category Category { get; set; }

        public List<BlogTag> BlogTag { get; set; }

        public string ImageUrl { get; set; }

        public string PublicId { get; set; }
    }
}
