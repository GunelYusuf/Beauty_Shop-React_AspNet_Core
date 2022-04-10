using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Dto.CategoryDTO;
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
        }
     
    }
}