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
    public class ProductRepository:IProductRepository
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;

        public ProductRepository(AppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        
        public  async Task<bool> AddAsync(Product entity)
        {
           try
            {
               await _dbContext.Products.AddAsync(entity);
               await _dbContext.SaveChangesAsync();
               return true;
            }
            catch (Exception)
            {

             return false;
           }

        }
        public async Task<bool> DeleteAsync(Product entity)
        {
            try
            {
                var productphoto = _dbContext.ProductPhotos.Where(p => p.ProductId == entity.Id);
                var ColorProduct = _dbContext.ProductColors.Where(p => p.ProductId == entity.Id);
                var tagPhoto = _dbContext.ProductTags.Where(p => p.ProductId == entity.Id);
                if (productphoto != null)
                {
                    foreach (var item in productphoto)
                    {
                        _dbContext.ProductPhotos.Remove(item);
                        await _dbContext.SaveChangesAsync();
                    }
                }
                if (ColorProduct != null)
                {
                    foreach (var item in ColorProduct)
                    {
                        _dbContext.ProductColors.Remove(item);
                        await _dbContext.SaveChangesAsync();
                    }
                }
                if (tagPhoto != null)
                {
                    foreach (var item in tagPhoto)
                    {
                        _dbContext.ProductTags.Remove(item);
                        await _dbContext.SaveChangesAsync();

                    }
                }
                _dbContext.Products.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }

        public Task<Product> GetAsync(Expression<Func<Product, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Product>> GetAllAsync(Expression<Func<Product, bool>> filter = null)
        {
           try
            {
                var product = await _dbContext.Products
                 .Include(p => p.Campaign)
                 .Include(p => p.productPhotos)
                 .Include(p => p.productColors)
                 .ThenInclude(p => p.Color)
                 .Include(p => p.productTags)
                 .ThenInclude(c => c.Tag)
                 .ToListAsync();
                return product;
            }
            catch (Exception)
            {
                 return null;

            }
        }

        public async Task<Product> GetSingle(Expression<Func<Product, bool>> filter = null)
        {
            try
            {
                var product = _dbContext.Products
                    .Include(p => p.Campaign)
                    .Include(p => p.productPhotos)
                    .Include(p => p.productColors)
                    .ThenInclude(p => p.Color)
                    .Include(p => p.productTags)
                    .ThenInclude(c => c.Tag)
                    .FirstOrDefault(filter);
                return product;
            }
            catch (Exception)
            {
                return null;

            }
        }

        public async Task<bool> UpdateAsync(Product entity)
        {
            try
            {
                var product = await GetSingle(p => p.Id == entity.Id);
                product.Campaign = entity.Campaign;
                product.productPhotos = entity.productPhotos;
                product.Name = entity.Name;
                product.Description = entity.Description;
                product.CategoryId = entity.CategoryId;
                product.productTags = entity.productTags;
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