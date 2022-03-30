using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class ProductRepository:IProductRepository
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        public ProductRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        
        public Task<bool> AddAsync(Product entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Product entity)
        {
            throw new NotImplementedException();
        }

        public Task<Product> GetAsync(Expression<Func<Product, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<List<Product>> GetAllAsync(Expression<Func<Product, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Product> GetSingle(Expression<Func<Product, bool>> filter = null)
        {
            try
            {
                return null;
            }
            catch (Exception)
            {
                return null;
                throw;
            }
        }

        public Task<bool> UpdateAsync(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}