using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Domain.Common;

namespace E_Commerce_Beauty_Shop.Application.Repositories
{
    public interface IRepository<T> where T : BaseEntity, new()
    {
        Task<T> GetAsync(Expression<Func<T, bool>> filter = null);

        Task<List<T>> GetAllAsync(Expression<Func<T, bool>> filter = null);

        Task<bool> AddAsync(T entity);

        Task<bool> UpdateAsync(T entity);

        Task<bool> DeleteAsync(T entity);

        Task<T> GetSingle(Expression<Func<T, bool>> filter = null);
    }
}