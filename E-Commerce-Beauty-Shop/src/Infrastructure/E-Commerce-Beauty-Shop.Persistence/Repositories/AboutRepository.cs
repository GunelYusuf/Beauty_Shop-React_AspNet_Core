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
    public class AboutRepository : IAboutRepository
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public AboutRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<bool> AddAsync(About entity)
        {
            try
            {
                await _dbContext.Abouts.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;

            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(About entity)
        {
            try
            {
                _dbContext.Abouts.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<About> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<About>> GetAllAsync(Expression<Func<About, bool>> filter = null)
        {
            try
            {
                var about = await _dbContext.Abouts
                 .Include(p => p.AboutBlocks)
                 .ThenInclude(c => c.Blocks)
                 .ToListAsync();
                return about;
            }
            catch (Exception)
            {
                return null;

            }
        }

        public async Task<About> GetAsync(Expression<Func<About, bool>> filter = null)
        {
            try
            {
                var about = await _dbContext.Abouts
                  .Include(b => b.AboutBlocks)
                  .ThenInclude(c => c.Blocks)
                  .FirstOrDefaultAsync(filter);
                return about;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<About> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<About> GetSingle(Expression<Func<About, bool>> filter = null)
        {
            try
            {
                var about = _dbContext.Abouts.FirstOrDefault(filter);
                return about;
            }
            catch (Exception)
            {

                return null;
            }
        }

        public IQueryable<About> GetWhere(Expression<Func<About, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();

        public async Task<bool> UpdateAsync(About entity)
        {
            try
            {
                About about = await GetAsync(c => c.Id == entity.Id);
                about.Id = entity.Id;
                about.Title = entity.Title;
                about.Subtitle = entity.Subtitle;
                about.Description = entity.Description;
                about.ImageUrl = entity.ImageUrl;
                about.VideoUrl = entity.VideoUrl;
               
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
