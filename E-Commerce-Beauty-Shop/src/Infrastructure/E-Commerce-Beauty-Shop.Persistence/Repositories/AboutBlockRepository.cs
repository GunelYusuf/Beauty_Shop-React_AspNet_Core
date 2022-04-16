using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Common;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class AboutBlockRepository :BaseEntity, IAboutBlockRepository
    {

        private readonly AppDbContext _dbContext;

        public AboutBlockRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> AddAsync(AboutBlock entity)
        {
            try
            {
                await _dbContext.AboutBlocks.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(AboutBlock entity)
        {
            try
            {
                _dbContext.AboutBlocks.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<AboutBlock> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<AboutBlock>> GetAllAsync(Expression<Func<AboutBlock, bool>> filter = null)
        {
            try
            {
                var result = await _dbContext.AboutBlocks.Where(filter).Include(x => x.Blocks).ToListAsync();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<AboutBlock> GetAsync(Expression<Func<AboutBlock, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<AboutBlock> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<AboutBlock> GetSingle(Expression<Func<AboutBlock, bool>> filter = null)
        {
            try
            {
                return _dbContext.AboutBlocks.FirstOrDefault(filter);

            }
            catch (Exception)
            {
                return null;

            }
        }

        public IQueryable<AboutBlock> GetWhere(Expression<Func<AboutBlock, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(AboutBlock entity)
        {
            throw new NotImplementedException();
        }
    }
}
