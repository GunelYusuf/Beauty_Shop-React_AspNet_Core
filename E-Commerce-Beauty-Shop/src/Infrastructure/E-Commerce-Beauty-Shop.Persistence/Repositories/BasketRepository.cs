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
    public class BasketRepository : IBasketRepository
    {

        private readonly AppDbContext _dbContext;


        public BasketRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;


        }

        public async Task<bool> AddAsync(Basket entity)
        {
            try{
                await _dbContext.Baskets.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async  Task<bool> DeleteAsync(Basket entity)
        {
            try
            {
                _dbContext.Baskets.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<Basket> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Basket>> GetAllAsync(Expression<Func<Basket, bool>> filter = null)
        {
            try
            {
                var basket = await _dbContext.Baskets
                    .Include(i => i.Items)
                    .ThenInclude(p => p.Product)
                    .Where(filter)
                    .ToListAsync();
                return basket;
            }
            catch (Exception)
            {
                return null;

            }

        }

        public Task<Basket> GetAsync(Expression<Func<Basket, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Basket> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<Basket> GetSingle(Expression<Func<Basket, bool>> filter = null)
        {
            try
            {
                var basket = await _dbContext.Baskets
                    .Include(i => i.Items)
                    .ThenInclude(p => p.Product)
                    .FirstOrDefaultAsync(filter);
                return basket;
            }
            catch (Exception)
            {
                return null;

            }
        }

        public IQueryable<Basket> GetWhere(Expression<Func<Basket, bool>> filter)
        {
            var query = _dbContext.Baskets.Where(filter);
            return query;
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();

        public Task<bool> UpdateAsync(Basket entity)
        {
            throw new NotImplementedException();
        }
    }
}
