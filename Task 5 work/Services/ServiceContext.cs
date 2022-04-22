using Microsoft.EntityFrameworkCore;
using Models;

namespace Services
{
    public class ServiceContext : DbContext
    {
        public DbSet<User>? Person { get; set; }

        public DbSet<Ride>? RideBooked { get; set; }

        public DbSet<Stops>? Stops { get; set; }

        public ServiceContext(DbContextOptions<ServiceContext> options) : base(options) 
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Stops>().HasNoKey();
        }
    }
}