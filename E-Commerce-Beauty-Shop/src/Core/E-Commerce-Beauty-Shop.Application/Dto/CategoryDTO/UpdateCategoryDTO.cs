using System;

namespace E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO
{
    public class UpdateCategoryDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsFeature { get; set; }
        public bool IsDeleted { get; set; }
       
    }
}