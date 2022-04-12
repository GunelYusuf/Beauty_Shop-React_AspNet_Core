using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class ProductImageRepository : IProductImageRepository
    {
        private readonly AppDbContext _dbContext;

        public ProductImageRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> AddAsync(ProductPhoto entity)
        {
            try
            {
                await _dbContext.ProductPhotos.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public async Task<bool> DeleteAsync(ProductPhoto entity)
        {
            try
            {
                 _dbContext.ProductPhotos.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public Task<List<ProductPhoto>> GetAllAsync(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductPhoto> GetAsync(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductPhoto> GetSingle(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(ProductPhoto entity)
        {
            throw new NotImplementedException();
        }
    }
}
