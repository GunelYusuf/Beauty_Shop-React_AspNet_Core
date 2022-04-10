﻿using System;
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
        public async Task<IActionResult> CreateProduct([FromForm]ProductDto productDto)
        {
            Product product = _mapper.Map<Product>(productDto);
            var result = await _productRepository.AddAsync(product);
            if (result==true && productDto.files != null)
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
                    productPhoto.PublicId= imageResult.PublicId;
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
                    productTag.TagsId = Guid.Parse(tag);
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
    }
}
