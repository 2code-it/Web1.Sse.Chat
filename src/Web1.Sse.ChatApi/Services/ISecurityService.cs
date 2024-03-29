using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Web1.Sse.ChatApi.Services
{
	public interface ISecurityService
	{
		void ConfigureJwtBearer(JwtBearerOptions options);
		void ConfigureAuthorization(AuthorizationOptions options);
		string GetToken(int userId);
		int GetCurrentUserId(ClaimsPrincipal? principal);
	}
}