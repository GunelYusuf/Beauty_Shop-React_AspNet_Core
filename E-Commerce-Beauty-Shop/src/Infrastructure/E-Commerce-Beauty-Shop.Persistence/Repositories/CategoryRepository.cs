using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class CategoryRepository: ICategoryRepository
    {
        
        private readonly AppDbContext _dbContext;
        public CategoryRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public Task<bool> AddAsync(Category entity)
        {
            try
            {
                _dbContext.Categories.Add(entity);
                _dbContext.SaveChangesAsync();
                return Task.FromResult(true);
            }
            catch (Exception)
            {
                return Task.FromResult(false);
            }
            

        }
        
        public Task<bool> DeleteAsync(Category entity)
        {
            try
            {
                _dbContext.Categories.Remove(entity);
                _dbContext.SaveChangesAsync();
                return Task.FromResult(true);
                
            }
            catch (Exception)
            {

                return Task.FromResult(false);
            }
        }
        
        public Task<List<Category>> GetAllAsync(Expression<Func<Category, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<Category> GetAsync(Expression<Func<Category, bool>> filter = null)
        {
            try
            {
                var category=  _dbContext.Categories.FirstOrDefault(filter);
                return category;

            }
            catch (Exception)
            {
                return null;
                
            }
        }

        public Task<bool> UpdateAsync(Category entity)
        {
            throw new NotImplementedException();
        }

    }
}