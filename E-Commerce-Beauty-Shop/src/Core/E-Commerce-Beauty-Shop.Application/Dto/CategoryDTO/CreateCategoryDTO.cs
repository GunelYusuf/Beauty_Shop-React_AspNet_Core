using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
namespace E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO
{
    public class CreateCategoryDTO
    {
        [Required]
        public string Name { get; set; }

        public bool IsFeature { get; set; }

        [Required]
        public IFormFile File { get; set; }

    }
}