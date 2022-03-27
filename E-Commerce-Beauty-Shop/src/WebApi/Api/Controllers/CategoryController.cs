using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController:ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;

        }
        
        // POST api/<CategoryController>
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryDTO categorydto)
        {
            var GetCategory=await _categoryRepository.GetAsync(c=>c.Name.ToLower()==categorydto.Name.ToLower());
            if (GetCategory != null) return BadRequest("Please, type another name");
           
            Category newCategory=new Category()
            {
                Name=categorydto.Name,
                IsFeature=categorydto.IsFeature,
            };
            await _categoryRepository.AddAsync(newCategory);
            return Ok(newCategory);

        }
        
    }
}