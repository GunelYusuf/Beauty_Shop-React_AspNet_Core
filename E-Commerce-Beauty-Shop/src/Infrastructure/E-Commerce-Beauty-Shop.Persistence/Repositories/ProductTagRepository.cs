using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;

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

        public IQueryable<ProductTag> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<ProductTag>> GetAllAsync(Expression<Func<ProductTag, bool>> filter = null)
        {
            try
            {
                var result = await _dbContext.ProductTags.Where(filter).Include(x => x.Tag).ToListAsync();
               return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<ProductTag> GetAsync(Expression<Func<ProductTag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<ProductTag> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<ProductTag> GetSingle(Expression<Func<ProductTag, bool>> filter = null)
        {
            try
            {
                return _dbContext.ProductTags.FirstOrDefault(filter);

            }
            catch (Exception)
            {
                return null;

            }
        }

        public IQueryable<ProductTag> GetWhere(Expression<Func<ProductTag, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();

        public Task<bool> UpdateAsync(ProductTag entity)
        {
            throw new NotImplementedException();
        }
    }
}
