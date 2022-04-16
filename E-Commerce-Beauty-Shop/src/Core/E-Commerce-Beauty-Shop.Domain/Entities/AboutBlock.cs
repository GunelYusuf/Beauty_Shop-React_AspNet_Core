using System;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Domain.Entities
{
    public class AboutBlock: BaseEntity
    {
        public Guid AboutId { get; set; }
        public About? About { get; set; }
        public Guid BlocksId { get; set; }
        public Blocks? Blocks { get; set; }
    }
}
