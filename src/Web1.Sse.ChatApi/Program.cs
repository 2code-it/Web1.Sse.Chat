using Code2.Web.SseTyped;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Web1.Sse.ChatApi.EndPoints;
using Web1.Sse.ChatApi.Services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
ISecurityService securityService = new SecurityService(builder.Configuration);
builder.Services.AddSingleton<IUserRepository, UserRepository>();
builder.Services.AddSingleton<ISecurityService>(securityService);
builder.Services.AddSseTyped();
builder.Services.AddCors();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(securityService.ConfigureJwtBearer);
builder.Services.AddAuthorization(securityService.ConfigureAuthorization);


var app = builder.Build();
// Configure the HTTP request pipeline.

app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.UseStaticFiles();
app.UseAuthentication();
app.UseAuthorization();

app.UseApiEndPoints();
app.UseSseTyped(rootPath: "/sse");


app.Run();
