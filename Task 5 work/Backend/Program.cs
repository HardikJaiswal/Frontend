using Microsoft.EntityFrameworkCore;
using Services;
using IContracts;
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
var connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ServiceContext>(options => options.UseSqlServer(connection));
builder.Services.AddTransient<IUserService, UserService>();

builder.Services.AddCors(c =>
{
    //c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
    //.AllowAnyHeader());
    c.AddPolicy(name: "AllowedOrigin",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000");
        });
});
builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
    .Json.ReferenceLoopHandling.Ignore)
    .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
    = new DefaultContractResolver());


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowedOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
