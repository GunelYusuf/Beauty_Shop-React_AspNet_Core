using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class TagRepository:ITagRepository
    {

        private readonly AppDbContext _dbContext;
       

        public TagRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
            
        }

        public Task<bool> AddAsync(Tag entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Tag entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Tag> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Tag>> GetAllAsync(Expression<Func<Tag, bool>> filter = null)
        {
            List<Tag> result = new List<Tag>();
            foreach (var tag in _dbContext.Tags)
            {
                result.Add(tag);
            }
            return result;
        }

        public Task<Tag> GetAsync(Expression<Func<Tag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Tag> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Tag> GetSingle(Expression<Func<Tag, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Tag> GetWhere(Expression<Func<Tag, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();

        public Task<bool> UpdateAsync(Tag entity)
        {
            throw new NotImplementedException();
        }
    }
}
