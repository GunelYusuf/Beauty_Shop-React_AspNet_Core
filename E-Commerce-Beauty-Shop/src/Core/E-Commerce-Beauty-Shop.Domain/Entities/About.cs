using System;
using System.Collections.Generic;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class About : BaseEntity
    {
        public string  Title { get; set; }

        public string Subtitle { get; set; }

        public string Description { get; set; }

        public List<AboutBlock>  AboutBlocks { get; set; }

        public string VideoUrl { get; set; }

        public string ImageUrl { get; set; }

        public string PublicId { get; set; }


    }
}
