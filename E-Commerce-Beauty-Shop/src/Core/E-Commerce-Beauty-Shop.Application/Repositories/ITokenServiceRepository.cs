using System;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Domain.Entities;

namespace E_Commerce_Beauty_Shop.Application.Repositories
{
    public interface ITokenServiceRepository
    {
        public Task<string> GenerateToken(AppUser user);
    }
}
