using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.AboutDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Services.ImageService;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        private readonly ImageService _imageService;
        private readonly IAboutRepository _aboutRepository;
        private readonly IAboutBlockRepository _aboutBlockRepository;
        private readonly IMapper _mapper;
        private readonly IBlocksRepository _blocksRepository;
        public AboutController(ImageService imageService, IMapper mapper, IAboutRepository aboutRepository, IAboutBlockRepository aboutBlockRepository, IBlocksRepository blocksRepository)
        {
            _imageService = imageService;
            _aboutRepository = aboutRepository;
            _aboutBlockRepository = aboutBlockRepository;
            _mapper = mapper;
            _blocksRepository = blocksRepository;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var abouts = await _aboutRepository.GetAllAsync();

            List<AboutResponseDto> aboutResponseDtos = new List<AboutResponseDto>();
            foreach (var about in abouts)
            {
                AboutResponseDto aboutDto = new AboutResponseDto()
                {
                    Id = about.Id,
                    Title = about.Title,
                    Subtitle=about.Subtitle,
                    Description = about.Description,
                    ImageUrl = about.ImageUrl,
                    VideoUrl=about.VideoUrl,
                   
                };

                aboutResponseDtos.Add(aboutDto);
            }

            return Ok(aboutResponseDtos);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] AboutCreateDto aboutDto)
        {
            var lastAbout = await _aboutRepository.GetSingle(b => b.Title.ToLower() == aboutDto.Title.ToLower());
            if (lastAbout != null) return BadRequest("Please another Title for About");
            About newAbout = _mapper.Map<About>(aboutDto);
            

            if (aboutDto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(aboutDto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                newAbout.ImageUrl = imageResult.SecureUrl.ToString();
                newAbout.PublicId = imageResult.PublicId;
            }
            if (!(await _aboutRepository.AddAsync(newAbout)))
            {
                return BadRequest("Anything has a problem");
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null) return BadRequest("Please, enter correct id");
            About about = await _aboutRepository.GetSingle(b => b.Id == id);
            AboutBlock aboutBlock = await _aboutBlockRepository.GetSingle(b => b.AboutId == id);
            if (!string.IsNullOrEmpty(about.PublicId)) await _imageService.DeleteImageAsync(about.PublicId);

            await _aboutBlockRepository.DeleteAsync(aboutBlock);
            if (await _aboutRepository.DeleteAsync(about))
            {
                return Ok();
            }
            return BadRequest("we have problem");
        }

        [HttpGet("GetAllBlocks")]
        public async Task<IActionResult> GetAllBlock()
        {
            var blocks = await _blocksRepository.GetAllAsync();
            return Ok(blocks);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] UpdateAboutDto aboutdto)
        {
            About newAbout = await _aboutRepository.GetAsync(b => b.Id == aboutdto.Id);
            if (newAbout == null) return BadRequest("Please Enter the correct id");

            newAbout.Title = aboutdto.Title;
            newAbout.Subtitle = aboutdto.Subtitle;
            newAbout.Description = aboutdto.Description;
            newAbout.VideoUrl = aboutdto.VideoUrl;
           

            if (aboutdto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(aboutdto.File);
                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                if (!string.IsNullOrEmpty(newAbout.PublicId)) await _imageService.DeleteImageAsync(newAbout.PublicId);

                newAbout.ImageUrl = imageResult.SecureUrl.ToString();
                newAbout.PublicId = imageResult.PublicId;

            }

            if (await _aboutRepository.UpdateAsync(newAbout))
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
            var about= await _aboutRepository.GetAsync(p => p.Id == id);
            if (about == null) return NotFound();


            AboutResponseDto getAbout = new AboutResponseDto()
            {
                Id = about.Id,
                Title = about.Title,
                Subtitle=about.Subtitle,
                Description = about.Description,
                ImageUrl = about.ImageUrl,
                VideoUrl=about.VideoUrl,
            
            };
            return Ok(getAbout);
        }



    }
}
