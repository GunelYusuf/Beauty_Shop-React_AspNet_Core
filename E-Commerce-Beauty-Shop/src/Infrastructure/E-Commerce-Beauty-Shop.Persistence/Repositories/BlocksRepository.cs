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
    public class BlocksRepository:IBlocksRepository
    {

        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public BlocksRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;

        }

        public async Task<bool> AddAsync(Blocks entity)
        {
            try
            {
                await _dbContext.Blocks.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;

            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(Blocks entity)
        {
            try
            {
                _dbContext.Blocks.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<Blocks> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Blocks>> GetAllAsync(Expression<Func<Blocks, bool>> filter = null)
        {
            List<Blocks> result = new List<Blocks>();
            foreach (var block in _dbContext.Blocks)
            {
                result.Add(block);
            }
            return result;
        }

        public async Task<Blocks> GetAsync(Expression<Func<Blocks, bool>> filter = null)
        {
            try
            {
                var block = await _dbContext.Blocks
                 .FirstOrDefaultAsync(filter);
                return block;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<Blocks> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public async Task<Blocks> GetSingle(Expression<Func<Blocks, bool>> filter = null)
        {
            try
            {
                var block = _dbContext.Blocks.FirstOrDefault(filter);
                return block;
            }
            catch (Exception)
            {

                return null;
            }
        }

        public IQueryable<Blocks> GetWhere(Expression<Func<Blocks, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public Task<int> SaveAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<bool> UpdateAsync(Blocks entity)
        {
            try
            {
                Blocks blocks = await GetAsync(c => c.Id == entity.Id);
                blocks.Id = entity.Id;
                blocks.Title = entity.Title;
                blocks.Step= entity.Step;
                blocks.IconUrl = entity.IconUrl;
                

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
