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
    public class BasketItemRepository : IBasketItemRepository
    {
        private readonly AppDbContext _dbContext;

        public BasketItemRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;

        }

        public Task<bool> AddAsync(BasketItem entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(BasketItem entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<BasketItem> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<List<BasketItem>> GetAllAsync(Expression<Func<BasketItem, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<BasketItem> GetAsync(Expression<Func<BasketItem, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<BasketItem> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<BasketItem> GetSingle(Expression<Func<BasketItem, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IQueryable<BasketItem> GetWhere(Expression<Func<BasketItem, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();

        public Task<bool> UpdateAsync(BasketItem entity)
        {
            throw new NotImplementedException();
        }
    }
}
