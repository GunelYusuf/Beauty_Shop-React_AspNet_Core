using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class CategoryRepository: ICategoryRepository
    {
        
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        public CategoryRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
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

        public IQueryable<Category> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Category>> GetAllAsync(Expression<Func<Category, bool>> filter = null)
        {
            List<Category> result = new List<Category>();
            foreach (var category in _dbContext.Categories.Include(p=>p.Products))
            {
                result.Add(category);
            }
            return result;
           
        }

        public async Task<Category> GetAsync(Expression<Func<Category, bool>> filter)
        {
            try
            {
               return _dbContext.Categories.FirstOrDefault(filter);

           }
            catch (Exception)
            {
                return null;
                
            }
        }

        public Task<Category> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Category> GetSingle(Expression<Func<Category, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Category> GetWhere(Expression<Func<Category, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();


        public async Task<bool> UpdateAsync(Category entity)
        {
            try
            {
                Category category = await GetAsync(c => c.Id == entity.Id);
                category.Id=entity.Id;
                category.Name=entity.Name;
                category.IsFeature=entity.IsFeature;
                category.IsDeleted=entity.IsDeleted;
                category.ImageUrl = entity.ImageUrl;
             
                await _dbContext.SaveChangesAsync();
                return true;


            }
            catch (Exception)
            {
                return false;
                throw;
            }
        }

    }
}