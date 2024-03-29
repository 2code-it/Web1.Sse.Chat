using Code2.Web.SseTyped;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using Web1.Sse.ChatApi.Assets;
using Web1.Sse.ChatApi.Models;
using Web1.Sse.ChatApi.Services;

namespace Web1.Sse.ChatApi.EndPoints
{
	public class MessagesEndPoint : IApiEndPoint
	{
		public MessagesEndPoint(ISecurityService securityService, ISseService sseService)
		{
			_securityService = securityService;
			_sseService = sseService;
		}

		private readonly ISseService _sseService;
		private readonly ISecurityService _securityService;

		public void Map(WebApplication app)
		{
			app.MapPost("/messages", AddMessage);
		}

		public IResult AddMessage([FromBody] ChatMessage message, ClaimsPrincipal principal)
		{
			message.FromUserId = _securityService.GetCurrentUserId(principal);
			message.Created = DateTime.Now;
			string[] userIds = message.ToUserIds.Select(x => x.ToString()).ToArray();
			_sseService.Send(message, (properties) => userIds.Length == 0 || userIds.Contains(properties["userId"]));
			return Results.NoContent();
		}
	}
}
