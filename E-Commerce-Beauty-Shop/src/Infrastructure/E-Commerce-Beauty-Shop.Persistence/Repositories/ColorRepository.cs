using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class ColorRepository:IColorRepository
    {
        private readonly AppDbContext _dbContext;
        

        public ColorRepository(AppDbContext dbContext)
        {

            _dbContext = dbContext;
            
        }

        public Task<bool> AddAsync(Color entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Color entity)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Color>> GetAllAsync(Expression<Func<Color, bool>> filter = null)
        {
            List<Color> result = new List<Color>();
            foreach (var color in _dbContext.Colors)
            {
                result.Add(color);
            }
            return result;
        }

        public Task<Color> GetAsync(Expression<Func<Color, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(Color entity)
        {
            throw new NotImplementedException();
        }
    }
}
