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
        
       
        public async Task<List<Category>> GetAllAsync(Expression<Func<Category, bool>> filter = null)
        {
            List<Category> result = new List<Category>();
            foreach (var category in _dbContext.Categories.Include(p=>p.Products))
            {
                result.Add(category);
            }
            return result;
           
        }

        public async Task<Category> GetAsync(Expression<Func<Category, bool>> filter = null)
        {
            try
            {
                var category=  _dbContext.Categories.FirstOrDefault(filter);
                return category;

            }
            catch (Exception)
            {
                return null;
                
            }
        }

        public async Task<bool> UpdateAsync(Category entity)
        {
            try
            {
                Category category = await GetAsync(c => c.Id == entity.Id);

                category.Id=entity.Id;
                category.Name=entity.Name;
                category.IsFeature=entity.IsFeature;
                category.IsDeleted=entity.IsDeleted;
             
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