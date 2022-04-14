using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<ProductPhoto>> GetAllAsync(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            try
            {
                var result = _dbContext.ProductPhotos.Where(filter).ToList();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<ProductPhoto> GetAsync(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<ProductPhoto> GetSingle(Expression<Func<ProductPhoto, bool>> filter = null)
        {
            try
            {
                return _dbContext.ProductPhotos.FirstOrDefault(filter);

            }
            catch (Exception)
            {
                return null;

            }
        }

        public Task<bool> UpdateAsync(ProductPhoto entity)
        {
            throw new NotImplementedException();
        }
    }
}
