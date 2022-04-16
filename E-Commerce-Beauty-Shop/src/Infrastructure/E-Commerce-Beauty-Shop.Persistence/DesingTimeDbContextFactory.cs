using System;
using E_Commerce_Beauty_Shop.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace E_Commerce_Beauty_Shop.Persistence
{
    public class DesingTimeDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<AppDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseSqlServer("Server=localhost;Database=BeautyContext;Trusted_Connection=False; User Id=sa;Password=MyPass@word");
            return new AppDbContext(dbContextOptionsBuilder.Options);
        }
    }
}
