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
    public class BlogTagRepository : IBlogTagRepository
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;


        public BlogTagRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<bool> AddAsync(BlogTag entity)
        {
            try
            {
                await _dbContext.BlogTags.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;

            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(BlogTag entity)
        {
            try
            {
                _dbContext.BlogTags.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<BlogTag> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<BlogTag>> GetAllAsync(Expression<Func<BlogTag, bool>> filter = null)
        {
            try
            {
                var result = await _dbContext.BlogTags.Where(filter).Include(x => x.Tag).ToListAsync();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<BlogTag> GetAsync(Expression<Func<BlogTag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<BlogTag> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<BlogTag> GetSingle(Expression<Func<BlogTag, bool>> filter = null)
        {
            try
            {
                return _dbContext.BlogTags.FirstOrDefault(filter);

            }
            catch (Exception)
            {
                return null;

            }
        }

        public IQueryable<BlogTag> GetWhere(Expression<Func<BlogTag, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();


        public Task<bool> UpdateAsync(BlogTag entity)
        {
            throw new NotImplementedException();
        }
    }
}
