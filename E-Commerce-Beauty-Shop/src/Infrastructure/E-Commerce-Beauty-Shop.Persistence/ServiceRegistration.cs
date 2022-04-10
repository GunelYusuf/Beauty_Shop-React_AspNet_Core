using System.Text;
using E_Commerce_Beauty_Shop.Application.Mapping;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using E_Commerce_Beauty_Shop.Persistence.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Services.ImageService;

namespace E_Commerce_Beauty_Shop.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceInfrastructure(this IServiceCollection service, IConfiguration configuration)
        {
            

            //Connection String
            service.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer("Server=localhost;Database=Shop-Commerce;Trusted_Connection=False;User Id=sa;Password=MyPass@word"));
            service.AddAutoMapper(typeof(AutoMapperProfile));


            //AutoMapper
            service.AddAutoMapper(typeof(AutoMapperProfile));

            //JWT
            service.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("myksssssssssssss3333ey")),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // Dependency Injection Jwt service
            service.AddScoped<ITokenServiceRepository, TokenServiceRepository>();


          
        service.AddIdentity<AppUser, IdentityRole>(options=> {
                options.Tokens.PasswordResetTokenProvider = TokenOptions.DefaultEmailProvider;
            }).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();


        service.AddScoped<ICategoryRepository, CategoryRepository>();
        service.AddScoped<IProductRepository, ProductRepository>();
        service.AddScoped<ImageService>();
        service.AddScoped<IProductImageRepository, ProductImageRepository>();
        service.AddScoped<IProductColorRepository, ProductColorRepository>();
        service.AddScoped<IProductTagRepository, ProductTagRepository>();
        service.AddScoped<IColorRepository, ColorRepository>();
        service.AddScoped<ITagRepository, TagRepository>();
        service.AddScoped<ICampaignRepository, CampaignRepository>();
        }
    }
    
    
}