using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.ProductDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Services.ImageService;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IProductRepository _productRepository;
        private readonly ImageService _imageService;
        private readonly IMapper _mapper;
        private readonly IProductImageRepository _productImageRepository;
        private readonly IProductColorRepository _productColorRepository;
        private readonly IProductTagRepository _productTagRepository;
        private readonly ITagRepository _tagRepository;
        private readonly IColorRepository _colorRepository;
        private readonly ICampaignRepository _campaignRepository;



        public ProductController(ICategoryRepository categoryRepository,
            IProductRepository productRepository,
            ImageService imageService, IMapper mapper,
            IProductImageRepository productImageRepository,
            IProductColorRepository productColorRepository,
            IProductTagRepository productTagRepository,
            ITagRepository tagRepository,
            IColorRepository colorRepository,
            ICampaignRepository campaignRepository


          )
        {
            _categoryRepository = categoryRepository;
            _productRepository = productRepository;
            _imageService = imageService;
            _mapper = mapper;
            _productImageRepository = productImageRepository;
            _productColorRepository = productColorRepository;
            _productTagRepository = productTagRepository;
            _tagRepository = tagRepository;
            _colorRepository = colorRepository;
            _campaignRepository = campaignRepository;
        }


        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromForm] ProductDto productDto)
        {
            Product product = _mapper.Map<Product>(productDto);
            var result = await _productRepository.AddAsync(product);
            if (result == true && productDto.files != null)
            {
                foreach (var (photo, index) in productDto.files.Select((v, i) => (v, i)))
                {
                    var imageResult = await _imageService.AddImageAsync(photo);
                    if (imageResult.Error != null)
                        return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                    ProductPhoto productPhoto = new();
                    if (index == 0) productPhoto.IsMain = true;
                    productPhoto.ProductId = product.Id;
                    productPhoto.PhotoUrl = imageResult.SecureUrl.ToString();
                    productPhoto.PublicId = imageResult.PublicId;
                    var res = await _productImageRepository.AddAsync(productPhoto);

                    if (!res) return BadRequest(new ProblemDetails { Title = "An Error occurred while uploading the photo." });
                }

                foreach (var color in productDto.ColorId)
                {
                    ProductColor productColor = new ProductColor();
                    productColor.ProductId = product.Id;
                    productColor.ColorId = Guid.Parse(color);
                    var colorRes = await _productColorRepository.AddAsync(productColor);
                }

                foreach (var tag in productDto.TagId)
                {
                    ProductTag productTag = new ProductTag();
                    productTag.ProductId = product.Id;
                    productTag.TagId = Guid.Parse(tag);
                    var tagRes = await _productTagRepository.AddAsync(productTag);
                }
            }

            return Ok("Create product successfully");
        }

        [HttpGet("GetAllColors")]
        public async Task<IActionResult> GetAllColor()
        {
            var color = await _colorRepository.GetAllAsync();
            return Ok(color);
        }


        [HttpGet("GetAllTags")]
        public async Task<IActionResult> GetAllTag()
        {
            var tag = await _tagRepository.GetAllAsync();
            return Ok(tag);
        }

        [HttpGet("GetAllCampaigns")]
        public async Task<IActionResult> GetAllCampaign()
        {
            var campaign = await _campaignRepository.GetAllAsync();
            return Ok(campaign);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await _productRepository.GetAllAsync();

            List<ProductResponseDto> productResponseDtos = new List<ProductResponseDto>();
            foreach (var product in products)
            {
                ProductResponseDto productDto = new ProductResponseDto()
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                    Quantity = product.Quantity,
                    CampaignId = product.CampaignId,
                    ProductCode = product.ProductCode,
                    Availibility = product.Availibility,
                    CategoryId = product.CategoryId,
                    CategoryName = product.Category.Name,
                    ProductColor = product.productColors.Select(x => x.Color).Select(c => new Color { Id = c.Id, Name = c.Name }).ToList(),
                    ProductTags = product.productTags.Select(x => x.Tag).Select(c => new Tag { Id = c.Id, Name = c.Name }).ToList(),
                    ProductPhoto = product.productPhotos.Select(i => new ProductPhoto { Id = i.Id, PhotoUrl = i.PhotoUrl }).ToList()

                };

                productResponseDtos.Add(productDto);
            }

            return Ok(productResponseDtos);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            Product product = await _productRepository.GetSingle(x => x.Id == id);
            if (product == null) return NotFound();

            bool success = await _productRepository.DeleteAsync(product);
            if (!success) return BadRequest();

            return Ok();
        }


        [HttpPut]
        public async Task<IActionResult> Put([FromForm] ProductUpdateDto productUpdateDto)
        {
            var photo = await _productImageRepository.GetAllAsync(x => x.ProductId == productUpdateDto.Id);


            int deletedPhoto = 0;
            int newPhoto = 0;

            if (productUpdateDto.DeletedPhotoId != null) deletedPhoto = productUpdateDto.DeletedPhotoId.Length;

            if (productUpdateDto.files != null) newPhoto = productUpdateDto.files.Length;


            if (photo.Count - deletedPhoto + newPhoto != 4) return BadRequest("Product photo must be 4 pieces!");


            Product updateProduct = _mapper.Map<Product>(productUpdateDto);
            await _productRepository.UpdateAsync(updateProduct);

            var allTags = await _productTagRepository.GetAllAsync(x => x.ProductId == updateProduct.Id);
            List<Guid> oldTags = allTags.Select(t => t.TagId).ToList();

            var allColors = await _productColorRepository.GetAllAsync(x => x.ProductId == updateProduct.Id);
            List<Guid> oldColors = allColors.Select(t => t.ColorId).ToList();

            List<Guid> addedTag = productUpdateDto.TagId.Except(oldTags).ToList();
            List<Guid> removedTag = oldTags.Except(productUpdateDto.TagId).ToList();

            List<Guid> addedColor = productUpdateDto.ColorId.Except(oldColors).ToList();
            List<Guid> removedColor = oldColors.Except(productUpdateDto.ColorId).ToList();

            int addedTagLength = addedTag.Count();
            int removedTagLength = removedTag.Count();
            int FullLengthTag = addedTagLength + removedTagLength;

            int addedColorLength = addedColor.Count();
            int removedColorLength = removedColor.Count();
            int FullLengthColor = addedColorLength + removedColorLength;

            for (int i = 1; i <= FullLengthTag; i++)
            {
                if (addedTagLength >= i)
                {
                    ProductTag productTag = new ProductTag();
                    productTag.ProductId = updateProduct.Id;
                    productTag.TagId = addedTag[i - 1];
                    await _productTagRepository.AddAsync(productTag);
                }

                if (removedTagLength >= i)
                {
                    ProductTag productTag = await _productTagRepository.GetSingle(c => c.TagId == removedTag[i - 1] && c.ProductId == updateProduct.Id);
                    await _productTagRepository.DeleteAsync(productTag);
                }
            }

            for (int i = 1; i <= FullLengthColor; i++)
            {
                if (addedColorLength >= i)
                {
                    ProductColor productColor = new ProductColor();
                    productColor.ProductId = updateProduct.Id;
                    productColor.ColorId = addedColor[i - 1];
                    await _productColorRepository.AddAsync(productColor);
                }

                if (removedColorLength >= i)
                {
                    ProductColor productColor = await _productColorRepository.GetSingle(c => c.ColorId == removedColor[i - 1] && c.ProductId == updateProduct.Id);
                    await _productColorRepository.DeleteAsync(productColor);
                }
            }

            for (int i = 1; i <= deletedPhoto + newPhoto; i++)
            {
                if (deletedPhoto >= i)
                {
                    ProductPhoto productPhoto = await _productImageRepository.GetSingle(x => x.Id == productUpdateDto.DeletedPhotoId[i - 1]);
                    if (!string.IsNullOrEmpty(productPhoto.PublicId)) await _imageService.DeleteImageAsync(productPhoto.PublicId);
                    await _productImageRepository.DeleteAsync(productPhoto);
                }
                if (newPhoto >= i)
                {

                    var imageResult = await _imageService.AddImageAsync(productUpdateDto.files[i - 1]);
                    if (imageResult.Error != null)
                        return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                    ProductPhoto productPhoto = new();
                    if (i == 1) productPhoto.IsMain = true;
                    productPhoto.ProductId = updateProduct.Id;
                    productPhoto.PhotoUrl = imageResult.SecureUrl.ToString();
                    productPhoto.PublicId = imageResult.PublicId;
                    bool res = await _productImageRepository.AddAsync(productPhoto);

                    if (!res) return BadRequest(new ProblemDetails { Title = "An Error occurred while uploading the photo." });

                }
            }

            return Ok();
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var product = await _productRepository.GetAsync(p => p.Id==id);
            if (product == null) return NotFound();


            ProductResponseDto getProduct = new ProductResponseDto()
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Quantity = product.Quantity,
                CampaignId = product.CampaignId,
                ProductCode = product.ProductCode,
                Availibility = product.Availibility,
                CategoryId = product.CategoryId,
                CategoryName = product.Category.Name,
                ProductColor = product.productColors.Select(x => x.Color).Select(c => new Color { Id = c.Id, Name = c.Name }).ToList(),
                ProductTags = product.productTags.Select(x => x.Tag).Select(c => new Tag { Id = c.Id, Name = c.Name }).ToList(),
                ProductPhoto = product.productPhotos.Select(i => new ProductPhoto { Id = i.Id, PhotoUrl = i.PhotoUrl }).ToList()

            };


            return Ok(getProduct);
        }

    }
}
