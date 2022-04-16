using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class CommentRepository : ICommentRepository
    {

        private readonly AppDbContext _dbContext;

        public CommentRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> AddAsync(Comment entity)
        {

            try
            {
                await _dbContext.Comments.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<bool> DeleteAsync(Comment entity)
        {

            try
            {
                _dbContext.Comments.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public IQueryable<Comment> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<List<Comment>> GetAllAsync(Expression<Func<Comment, bool>> filter = null)
        {
            try
            {
                var comment = await _dbContext.Comments.Include(x => x.User).Include(p => p.Product).ToListAsync();
                return comment;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<Comment> GetAsync(Expression<Func<Comment, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> GetById(string Id)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> GetSingle(Expression<Func<Comment, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Comment> GetWhere(Expression<Func<Comment, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveAsync() => await _dbContext.SaveChangesAsync();


        public Task<bool> UpdateAsync(Comment entity)
        {
            throw new NotImplementedException();
        }
    }
}
