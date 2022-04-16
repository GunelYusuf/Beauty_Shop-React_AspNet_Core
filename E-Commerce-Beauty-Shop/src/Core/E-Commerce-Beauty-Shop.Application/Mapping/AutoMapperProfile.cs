using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.AboutDto;
using E_Commerce_Beauty_Shop.Application.Dto.BlockDto;
using E_Commerce_Beauty_Shop.Application.Dto.BlogDto;
using E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO;
using E_Commerce_Beauty_Shop.Application.Dto.CommentDto;
using E_Commerce_Beauty_Shop.Application.Dto.ProductDto;
using E_Commerce_Beauty_Shop.Application.Dto.UserDto;
using E_Commerce_Beauty_Shop.Domain.Entities;

namespace E_Commerce_Beauty_Shop.Application.Mapping
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserLoginDto, AppUser>().ReverseMap();
            CreateMap<UserRegisterDto, AppUser>().ReverseMap();
            CreateMap<CreateCategoryDTO, Category>().ReverseMap();
            CreateMap<UpdateCategoryDTO,Category>().ReverseMap();
            CreateMap<Category,Category>().ReverseMap();
            CreateMap<ProductDto, Product>().ReverseMap();
            CreateMap<ProductUpdateDto, Product>().ReverseMap();
            CreateMap<BlogCreateDto, Blog>().ReverseMap();
            CreateMap<UpdateBlogDto, Blog>().ReverseMap();
            CreateMap<AppUserDto, AppUser>().ReverseMap();
            CreateMap<BlockCreateDto, Blocks>().ReverseMap();
            CreateMap<UpdateBlockDto, Blocks>().ReverseMap();
            CreateMap<AboutCreateDto, About>().ReverseMap();
            CreateMap<UpdateAboutDto, About>().ReverseMap();
            CreateMap<CreateCommentDto, Comment>().ReverseMap();


        }
     
    }
}