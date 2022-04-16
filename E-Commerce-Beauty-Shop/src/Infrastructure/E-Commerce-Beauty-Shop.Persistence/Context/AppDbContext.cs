using System;
using E_Commerce_Beauty_Shop.Domain.Entities;
using E_Commerce_Beauty_Shop.Domain.Entities.Order;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_Beauty_Shop.Persistence.Context
{

    public class AppDbContext:IdentityDbContext<AppUser,Role,Guid>
    {
        public AppDbContext(DbContextOptions options):base(options)
        {
            
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Campaign> Campaigns  { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<ProductPhoto> ProductPhotos { get; set; }
        public  DbSet<ProductTag> ProductTags { get; set; }
        public  DbSet<ProductColor> ProductColors { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<BlogTag> BlogTags { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Blocks> Blocks { get; set; }
        public DbSet<AboutBlock> AboutBlocks { get; set; }
        public DbSet<Comment>  Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<AppUser>()
                    .HasOne(x => x.Address)
                    .WithOne()
                    .HasForeignKey<UserAddress>(x => x.Id)
                    .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Role>()
                   .HasData
                   (
                      new Role { Id = Guid.NewGuid(),Name = "Member", NormalizedName = "MEMBER"},
                      new Role { Id = Guid.NewGuid(), Name = "Admin", NormalizedName = "ADMIN" }
                   );
                    
        }

    }
}