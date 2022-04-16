using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.BlogDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Services.ImageService;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IBlogRepository _blogRepository;
        private readonly IBlogTagRepository _blogTagRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly IProductTagRepository _productTagRepository;
        private readonly ITagRepository _tagRepository;
        private readonly ImageService _imageService;

        public BlogController(IBlogRepository blogRepository,IBlogTagRepository blogTagRepository, ICategoryRepository categoryRepository, IMapper mapper, ITagRepository tagRepository, ImageService imageService)
        {
            _blogRepository = blogRepository;
            _blogTagRepository = blogTagRepository;
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _tagRepository = tagRepository;
            _imageService = imageService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var blogs = await _blogRepository.GetAllAsync();

            List<BlogResponseDto> blogResponseDtos = new List<BlogResponseDto>();
            foreach (var blog in blogs)
            {
                BlogResponseDto blogDto = new BlogResponseDto()
                {
                    Id = blog.Id,
                    Title = blog.Title,
                    Description = blog.Description,
                    Created = blog.Created,
                    ImageUrl = blog.ImageUrl,
                    CategoryId = blog.CategoryId,
                    CategoryName = blog.Category.Name,
                    BlogTags = blog.BlogTag.Select(x => x.Tag).Select(c => new Tag { Id = c.Id, Name = c.Name }).ToList(),
                    

                };

                blogResponseDtos.Add(blogDto);
            }

            return Ok(blogResponseDtos);
        }

        [HttpGet("GetAllTags")]
        public async Task<IActionResult> GetAllTag()
        {
            var tag = await _tagRepository.GetAllAsync();
            return Ok(tag);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] BlogCreateDto blogDto)
        {
            var lastBlog = await _blogRepository.GetSingle(b => b.Title.ToLower() == blogDto.Title.ToLower());
            if (lastBlog != null) return BadRequest("Please another Title Blog");
            Blog newBlog = _mapper.Map<Blog>(blogDto);
            newBlog.Created = DateTime.Now;
           
            if (blogDto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(blogDto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                newBlog.ImageUrl = imageResult.SecureUrl.ToString();
                newBlog.PublicId = imageResult.PublicId;
            }
            if (!(await _blogRepository.AddAsync(newBlog)))
            {
                return BadRequest("Anything has a problem");
            }

            foreach (var item in blogDto.TagId)
            {
 
                if (!(await _blogTagRepository.AddAsync(new() {BlogId = newBlog.Id,TagId=item})))
                {
                    return BadRequest("Anything has a problem");
                }
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null) return BadRequest("Please, enter correct id");
            Blog blog = await _blogRepository.GetSingle(b => b.Id == id);
            BlogTag blogTags = await _blogTagRepository.GetSingle(b => b.BlogId == id);
            if (!string.IsNullOrEmpty(blog.PublicId)) await _imageService.DeleteImageAsync(blog.PublicId);
           
            await _blogTagRepository.DeleteAsync(blogTags);
            if (await _blogRepository.DeleteAsync(blog))
            {
                return Ok();
            }
            return BadRequest("we have problem");
        }



        [HttpPut]
        public async Task<IActionResult> Put([FromForm] UpdateBlogDto blogdto)
        {
           Blog newBlog = await  _blogRepository.GetAsync(b => b.Id ==blogdto.Id);
            if (newBlog==null) return BadRequest("Please Enter the correct id");

            newBlog.Title = blogdto.Title;
            newBlog.Description = blogdto.Description;
            newBlog.CategoryId = blogdto.CategoryId;

            if (blogdto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(blogdto.File);
                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                if (!string.IsNullOrEmpty(newBlog.PublicId)) await _imageService.DeleteImageAsync(newBlog.PublicId);

                newBlog.ImageUrl = imageResult.SecureUrl.ToString();
                newBlog.PublicId = imageResult.PublicId;

            }

            var allTags = await _blogTagRepository.GetAllAsync(x => x.BlogId == newBlog.Id);
            List<Guid> oldTags = allTags.Select(t => t.TagId).ToList();

            List<Guid> addedTag = blogdto.TagId.Except(oldTags).ToList();
            List<Guid> removedTag = oldTags.Except(blogdto.TagId).ToList();

            int addedTagLength = addedTag.Count();
            int removedTagLength = removedTag.Count();
            int FullLengthTag = addedTagLength + removedTagLength;

            for (int i = 1; i <= FullLengthTag; i++)
            {
                if (addedTagLength >= i)
                {
                    BlogTag blogTag = new BlogTag();
                    blogTag.BlogId = newBlog.Id;
                    blogTag.TagId = addedTag[i - 1];
                    await _blogTagRepository.AddAsync(blogTag);
                }

                if (removedTagLength >= i)
                {
                    BlogTag blogTag = await _blogTagRepository.GetSingle(c => c.TagId == removedTag[i - 1] && c.BlogId == newBlog.Id);
                    await _blogTagRepository.DeleteAsync(blogTag);
                }
            }

            if (await _blogRepository.UpdateAsync(newBlog))
            {
                return Ok();
            }
            else
            {
                return BadRequest("Sorry, We have problem");
            }

        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var blog = await _blogRepository.GetAsync(p => p.Id == id);
            if (blog == null) return NotFound();


            BlogResponseDto getBlog = new BlogResponseDto()
            {
                Id = blog.Id,
                Title = blog.Title,
                Description = blog.Description,
                ImageUrl = blog.ImageUrl,
                CategoryId = blog.CategoryId,
                CategoryName = blog.Category.Name,
                BlogTags = blog.BlogTag.Select(x => x.Tag).Select(c => new Tag { Id = c.Id, Name = c.Name }).ToList(),
               

            };
           return Ok(getBlog);
        }

    }
}
