using System;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class Blocks:BaseEntity
    {
        public string Step { get; set; }

        public string Title { get; set; }

        public string IconUrl { get; set; }

        public string PublicId { get; set; }
    }
}
