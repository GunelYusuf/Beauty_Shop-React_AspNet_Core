using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.BlockDto;
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
    public class BlockController : ControllerBase
    {
        private readonly IBlocksRepository _blocksRepository;
        private readonly IAboutBlockRepository _aboutBlockRepository;
        private readonly IMapper _mapper;
        private readonly ImageService _imageService;
        private readonly IAboutRepository _aboutRepository;

        public BlockController(IAboutBlockRepository aboutBlockRepository, IBlocksRepository blocksRepository, IMapper mapper, ImageService imageService, IAboutRepository aboutRepository)
        {
            _blocksRepository = blocksRepository;
            _mapper = mapper;
            _imageService = imageService;
            _aboutRepository = aboutRepository;
            _aboutBlockRepository = aboutBlockRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var blocks = await _blocksRepository.GetAllAsync();

            List<BlockResponseDto> blockResponseDtos = new List<BlockResponseDto>();
            foreach (var block in blocks)
            {
                BlockResponseDto blockDto = new BlockResponseDto()
                {
                    Id = block.Id,
                    Title = block.Title,
                    Step = block.Step,
                    IconUrl = block.IconUrl,
                };

                blockResponseDtos.Add(blockDto);
            }

            return Ok(blockResponseDtos);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] BlockCreateDto blockDto)
        {
            var lastBlock = await _blocksRepository.GetSingle(b => b.Title.ToLower() == blockDto.Title.ToLower());
            if (lastBlock != null) return BadRequest("Please another Title Block");
            Blocks newBlocks = _mapper.Map<Blocks>(blockDto);
            if (blockDto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(blockDto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                newBlocks.IconUrl = imageResult.SecureUrl.ToString();
                newBlocks.IconUrl = imageResult.PublicId;
            }
            if (!(await _blocksRepository.AddAsync(newBlocks)))
            {
                return BadRequest("Anything has a problem");
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null) return BadRequest("Please, enter correct id");
            Blocks blocks = await _blocksRepository.GetSingle(b => b.Id == id);
            AboutBlock aboutBlock = await _aboutBlockRepository.GetSingle(b => b.BlocksId == id);
            if (!string.IsNullOrEmpty(blocks.PublicId)) await _imageService.DeleteImageAsync(blocks.PublicId);

            await _aboutBlockRepository.DeleteAsync(aboutBlock);
            if (await _blocksRepository.DeleteAsync(blocks))
            {
                return Ok();
            }
            return BadRequest("we have problem");
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] UpdateBlockDto blockdto)
        {
            Blocks newBlock = await _blocksRepository.GetAsync(b => b.Id == blockdto.Id);
            if (newBlock == null) return BadRequest("Please Enter the correct id");

            newBlock.Title = blockdto.Title;
            newBlock.Step = blockdto.Step;
            

            if (blockdto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(blockdto.File);
                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });
                if (!string.IsNullOrEmpty(newBlock.PublicId)) await _imageService.DeleteImageAsync(newBlock.PublicId);

                newBlock.IconUrl = imageResult.SecureUrl.ToString();
                newBlock.PublicId = imageResult.PublicId;

            }

            if (await _blocksRepository.UpdateAsync(newBlock))
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
            var block = await _blocksRepository.GetAsync(p => p.Id == id);
            if (block == null) return NotFound();


            BlockResponseDto getBlock = new BlockResponseDto()
            {
                Id = block.Id,
                Title = block.Title,
                Step=block.Step,
                IconUrl=block.IconUrl,
            };
            return Ok(getBlock);
        }

    }
}
