using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.CommentDto;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {

        private readonly ICommentRepository _commentRepository;
        private readonly IProductRepository _productRepository;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public CommentController(ICommentRepository commentRepository, IProductRepository productRepository, UserManager<AppUser> userManager, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _productRepository = productRepository;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateCommentDto commentDto)
        {

            //if (commentDto.Message == null) return BadRequest("Please enter your message");
            Comment comment = new Comment();
            
            var userId = String.Empty;
            if (User.Identity.IsAuthenticated)
            {
                userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Sid).Value;
            }
            else
            {
                return BadRequest(new ProblemDetails { Title = "You have to login first before you can comment." });
            }

            comment.UserId =Guid.Parse(userId);
            comment.Message = commentDto.Message;
            comment.ProductId = commentDto.ProductId;
            comment.Rating = commentDto.Rating;
            comment.CommentDate = DateTime.Now;


            if (await _commentRepository.AddAsync(comment))
            {
                return Ok();
            }

            return BadRequest("Something happened");
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comments = await _commentRepository.GetAllAsync();
            if (comments == null)
            {
                return BadRequest("No Comments");
            }

            List<CommentResponseDto> commentResponseDtos = new List<CommentResponseDto>();
            foreach (var comment in comments)
            {
                CommentResponseDto commentDto = new CommentResponseDto()
                {
                    Id = comment.Id,
                    Message=comment.Message,
                    FullName=comment.User.UserName,
                    Rating=comment.Rating,
                    ProductId=comment.ProductId,


                };

                commentResponseDtos.Add(commentDto);
            }

            return Ok(commentResponseDtos);

        }



    }
}
