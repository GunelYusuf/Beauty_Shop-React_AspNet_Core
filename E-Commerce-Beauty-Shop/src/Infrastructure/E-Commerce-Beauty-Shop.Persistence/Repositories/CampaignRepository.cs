using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using E_Commerce_Beauty_Shop.Application.Repositories;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Persistence.Context;

namespace E_Commerce_Beauty_Shop.Persistence.Repositories
{
    public class CampaignRepository:ICampaignRepository
    {
        private readonly AppDbContext _dbContext;
       

        public CampaignRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
           
        }

        public Task<bool> AddAsync(Campaign entity)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteAsync(Campaign entity)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Campaign>> GetAllAsync(Expression<Func<Campaign, bool>> filter = null)
        {
            List<Campaign> result = new List<Campaign>();
            foreach (var campaign in _dbContext.Campaigns)
            {
                result.Add(campaign);
            }
            return result;
        }

        public Task<Campaign> GetAsync(Expression<Func<Campaign, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<Campaign> GetSingle(Expression<Func<Campaign, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateAsync(Campaign entity)
        {
            throw new NotImplementedException();
        }
    }
}
