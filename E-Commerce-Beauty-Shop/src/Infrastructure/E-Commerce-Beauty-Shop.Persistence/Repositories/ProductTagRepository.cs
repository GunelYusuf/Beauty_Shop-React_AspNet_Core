using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class ProductTagRepository:IProductTagRepository
    {
        private readonly AppDbContext _dbContext;

        public ProductTagRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> AddAsync(ProductTag entity)
        {
            try
            {
                await _dbContext.ProductTags.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public async Task<bool> DeleteAsync(ProductTag entity)
        {
            try
            {
                _dbContext.ProductTags.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public Task<List<ProductTag>> GetAllAsync(Expression<Func<ProductTag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductTag> GetAsync(Expression<Func<ProductTag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductTag> GetSingle(Expression<Func<ProductTag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(ProductTag entity)
        {
            throw new NotImplementedException();
        }
    }
}
