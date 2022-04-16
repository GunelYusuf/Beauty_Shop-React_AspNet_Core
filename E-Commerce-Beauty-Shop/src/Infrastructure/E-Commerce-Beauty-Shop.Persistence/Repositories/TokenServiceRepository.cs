using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class TokenServiceRepository:ITokenServiceRepository
    {
        
        private readonly UserManager<AppUser> _userManager;


        public TokenServiceRepository(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
            
        }

        public async Task<string> GenerateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
              new Claim (ClaimTypes.Email,user.Email),
              new Claim (ClaimTypes.Sid,user.Id.ToString())

            };

            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("myksssssssssssss3333ey"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var tokenOption = new JwtSecurityToken
            (
              issuer: null,
              audience: null,
              claims: claims,
              expires: DateTime.Now.AddDays(7),
              signingCredentials: creds
            );
            return new JwtSecurityTokenHandler().WriteToken(tokenOption);
        }
    }
}
