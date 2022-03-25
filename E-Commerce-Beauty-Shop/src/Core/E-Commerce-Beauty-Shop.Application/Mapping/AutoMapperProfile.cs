using AutoMapper;
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
        }
     
    }
}