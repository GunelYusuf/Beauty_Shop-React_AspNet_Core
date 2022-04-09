using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Services.ImageService;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController:ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        private readonly ImageService _imageService;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryRepository categoryRepository,IMapper mapper, IProductRepository productRepository, ImageService imageService)
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _imageService = imageService;
            _mapper = mapper;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<Category> categories = await _categoryRepository.GetAllAsync();
            bool empty= !categories.Any();

            return (empty)?StatusCode(504,"Coming soon Category we have work"): Ok(categories);
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            if(id==null) return BadRequest("Please dont entry empty id");
            
            Category category=await _categoryRepository.GetAsync(c=>c.Id==id);
           
            return (category != null) ? Ok (category) : BadRequest("Please another id we don't have this id category");
        }
        
        // POST api/<CategoryController>
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromForm] CreateCategoryDTO categorydto)
        {
            var GetCategory=await _categoryRepository.GetAsync(c=>c.Name.ToLower()==categorydto.Name.ToLower());
            if (GetCategory != null) return BadRequest(new ProblemDetails{Title="Please, enter another type name"});
            Category newCategory= _mapper.Map<Category>(categorydto);
            if (categorydto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(categorydto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                newCategory.ImageUrl = imageResult.SecureUrl.ToString();
                newCategory.PublicId = imageResult.PublicId;
            }
            await _categoryRepository.AddAsync(newCategory);
            return Ok(newCategory);

        }
        
        
        [HttpPut("{id}")]
        public async Task<IActionResult>  UpdateCategory(Guid id, [FromForm] UpdateCategoryDTO categorydto)
        {
            if (id == null || ((await _categoryRepository.GetAsync(c => c.Id == id)) == null)) {
                return BadRequest("Please Enter the correct id");
            }
            Category updateCategory=await _categoryRepository.GetAsync(c=>c.Id==id);
            updateCategory=_mapper.Map<Category>(categorydto);

            if (categorydto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(categorydto.File);
                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                if (!string.IsNullOrEmpty(updateCategory.PublicId)) await _imageService.DeleteImageAsync(updateCategory.PublicId);

                updateCategory.ImageUrl = imageResult.SecureUrl.ToString();
                updateCategory.PublicId = imageResult.PublicId;

            }


            if(await _categoryRepository.UpdateAsync(updateCategory))
            {
                return Ok();
            }
            else
            {
                return BadRequest("Sorry, We have problem");
            }
           
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if(id == null||(await _categoryRepository.GetAsync(c => c.Id == id))==null)
            {
                return StatusCode(407,"Please enter real id");
            }
            Category category = await _categoryRepository.GetAsync(c => c.Id == id);
            if (!string.IsNullOrEmpty(category.PublicId)) await _imageService.DeleteImageAsync(category.PublicId);
            //if ((await _productRepository.GetSingle(p => p.CategoryId == id)) != null || (await _categoryRepository.GetSingle(c=>c.MainCategoryId==id))!=null)
            //{
            //    category.IsDeleted = true;
            //    return Ok();
            //}
            return await _categoryRepository.DeleteAsync(category) ? Ok() : StatusCode(405,"Sorry We have some problem");

        }
        

        
    }
}