using Code2.Web.SseTyped;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Security.Claims;
using Web1.Sse.ChatApi.Assets;
using Web1.Sse.ChatApi.Models;
using Web1.Sse.ChatApi.Services;

namespace Web1.Sse.ChatApi.EndPoints
{
	public class UsersEndPoint : IApiEndPoint
	{

		public UsersEndPoint(IUserRepository userRepository, ISseService sseService, ISecurityService securityService)
		{
			_userRepository = userRepository;
			_sseService = sseService;
			_securityService = securityService;
		}

		private readonly IUserRepository _userRepository;
		private readonly ISseService _sseService;
		private readonly ISecurityService _securityService;

		public void Map(WebApplication app)
		{
			app.MapPost("/users/login", Login).AllowAnonymous();
			app.MapGet("/users", GetUsers);
			app.MapPut("/users/{userId}", UpdateUser);
			app.MapDelete("/users/{userId}", DeleteUser);
		}

		public IResult Login(LoginRequest loginRequest)
		{
			try
			{
				ChatUser user = new ChatUser { Name = loginRequest.Name };
				int userId = _userRepository.Add(user);
				_sseService.Send(new SystemMessage(SystemMessage.UserAddedMessageType, user));
				return Results.Ok(new LoginResponse { UserId = userId, Token = _securityService.GetToken(userId) });
			}
			catch (Exception ex)
			{
				return Results.Problem(ex.Message);
			}
		}

		public IResult GetUsers()
		{
			return Results.Ok(_userRepository.Get());
		}

		public IResult UpdateUser(int userId, [FromBody] ChatUser user, ClaimsPrincipal principal)
		{
			if (!IsCurrentUserId(userId, principal)) return Results.Problem("Invalid operation");
			try
			{
				_userRepository.Update(userId, user);
				_sseService.Send(new SystemMessage(SystemMessage.UserModifiedMessageType, user));
				return Results.NoContent();
			}
			catch (Exception ex)
			{
				return Results.Problem(ex.Message);
			}
		}

		public IResult DeleteUser(int userId, ClaimsPrincipal principal)
		{
			if (!IsCurrentUserId(userId, principal)) return Results.Problem("Invalid operation");
			try
			{
				_userRepository.Delete(userId);
				_sseService.Send(new SystemMessage(SystemMessage.UserRemovedMessageType, new ChatUser { Id = userId }));
				return Results.NoContent();
			}
			catch (Exception ex)
			{
				return Results.Problem(ex.Message);
			}
		}

		private bool IsCurrentUserId(int userId, ClaimsPrincipal principal)
			=> _securityService.GetCurrentUserId(principal) == userId;


	}
}
