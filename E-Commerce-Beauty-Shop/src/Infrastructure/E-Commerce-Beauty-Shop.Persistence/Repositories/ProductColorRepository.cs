using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Common;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class ProductColorRepository:BaseEntity,IProductColorRepository
    {
        private readonly AppDbContext _dbContext;

        public ProductColorRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> AddAsync(ProductColor entity)
        {
            try
            {
                await _dbContext.ProductColors.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public async Task<bool> DeleteAsync(ProductColor entity)
        {
            try
            {
                _dbContext.ProductColors.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public Task<List<ProductColor>> GetAllAsync(Expression<Func<ProductColor, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductColor> GetAsync(Expression<Func<ProductColor, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductColor> GetSingle(Expression<Func<ProductColor, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(ProductColor entity)
        {
            throw new NotImplementedException();
        }

       
    }
}
