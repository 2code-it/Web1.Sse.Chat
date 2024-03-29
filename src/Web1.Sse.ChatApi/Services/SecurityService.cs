using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Web1.Sse.ChatApi.Services
{
	public class SecurityService : ISecurityService
	{
		public SecurityService(IConfiguration config)
		{
			_jwtAudience = config["Jwt:Audience"];
			_jwtIssuer = config["Jwt:Issuer"];
			_jwtSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
		}

		private string _jwtAudience;
		private string _jwtIssuer;
		private SymmetricSecurityKey _jwtSigningKey;
		private string _userIdKey = "userId";

		public void ConfigureJwtBearer(JwtBearerOptions options)
		{
			options.TokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuer = true,
				ValidateAudience = true,
				ValidateLifetime = true,
				ValidateIssuerSigningKey = true,
				ValidIssuer = _jwtIssuer,
				ValidAudience = _jwtAudience,
				IssuerSigningKey = _jwtSigningKey
			};
		}

		public void ConfigureAuthorization(AuthorizationOptions options)
		{
			var builder = new AuthorizationPolicyBuilder();
			options.FallbackPolicy = builder.RequireAuthenticatedUser().Build();
		}

		public string GetToken(int userId)
		{
			DateTime expires = DateTime.Now.AddHours(12);
			IEnumerable<Claim> claims = new[] { new Claim(_userIdKey, userId.ToString()) };
			SigningCredentials credentials = new SigningCredentials(_jwtSigningKey, SecurityAlgorithms.HmacSha256);
			JwtSecurityToken token = new JwtSecurityToken(issuer: _jwtIssuer, audience: _jwtAudience, signingCredentials: credentials, expires: expires, claims: claims);
			JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
			return handler.WriteToken(token);
		}

		public int GetCurrentUserId(ClaimsPrincipal? principal)
		{
			var id = (ClaimsIdentity?)principal?.Identity;
			string? userIdString = id?.Claims.FirstOrDefault(x => x.Type == _userIdKey)?.Value;
			if (userIdString is null) return 0;
			return int.TryParse(userIdString, out int userId) ? userId : 0;
		}
	}
}
