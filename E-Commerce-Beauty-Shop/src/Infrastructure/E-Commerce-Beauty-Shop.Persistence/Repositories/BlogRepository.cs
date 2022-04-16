using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class BlogRepository : IBlogRepository
    {

        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;


        public BlogRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<bool> AddAsync(Blog entity)
        {
            try
            {
                await _dbContext.Blogs.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;

            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(Blog entity)
        {
            try
            {
                _dbContext.Blogs.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<Blog> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Blog>> GetAllAsync(Expression<Func<Blog, bool>> filter = null)
        {
            try
            {
                var blog = await _dbContext.Blogs
                 .Include(p => p.Category)
                 .Include(p => p.BlogTag)
                 .ThenInclude(c => c.Tag)
                 .ToListAsync();
                return blog;
            }
            catch (Exception)
            {
                return null;

            }
        }

        public async Task<Blog> GetAsync(Expression<Func<Blog, bool>> filter = null)
        {
            try
            {
                var blog = await _dbContext.Blogs
                  .Include(b => b.Category)
                  .Include(b => b.BlogTag)
                  .ThenInclude(c => c.Tag)
                  .FirstOrDefaultAsync(filter);
                return blog;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<Blog> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<Blog> GetSingle(Expression<Func<Blog, bool>> filter = null)
        {
            try
            {
                var blog = _dbContext.Blogs.FirstOrDefault(filter);
                return blog;
            }
            catch (Exception)
            {

                return null;
            }
        }

        public IQueryable<Blog> GetWhere(Expression<Func<Blog, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();
       

        public async Task<bool> UpdateAsync(Blog entity)
        {
            try
            {
                Blog blog = await GetAsync(c => c.Id == entity.Id);
                blog.Id = entity.Id;
                blog.Title = entity.Title;
                blog.Description = entity.Description;
                blog.CategoryId = entity.CategoryId;
                blog.ImageUrl = entity.ImageUrl;

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
