using System.ComponentModel.DataAnnotations;

namespace E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO
{
    public class CreateCategoryDTO
    {
        [Required]
        public string Name { get; set; }
        public bool IsFeature { get; set; }
        
    }
}