using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class OrderRepository : IOrderRepository
    {

        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public OrderRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<bool> AddAsync(Order entity)
        {
            try
            {
                await _dbContext.Orders.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(Order entity)
        {
            try
            {
                _dbContext.Orders.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<Order> GetAll()
        {
            try
            {
                var query = _dbContext.Orders.AsQueryable();
                return query;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<List<Order>> GetAllAsync(Expression<Func<Order, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetAsync(Expression<Func<Order, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetSingle(Expression<Func<Order, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Order> GetWhere(Expression<Func<Order, bool>> filter)
        {
            var query = _dbContext.Orders.Where(filter);
            return query;
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();


        public Task<bool> UpdateAsync(Order entity)
        {
            throw new NotImplementedException();
        }
    }
}
