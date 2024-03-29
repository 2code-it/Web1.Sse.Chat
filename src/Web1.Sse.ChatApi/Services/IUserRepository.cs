using System;
using Web1.Sse.ChatApi.Models;

namespace Web1.Sse.ChatApi.Services
{
	public interface IUserRepository
	{
		int Add(ChatUser user);
		void Delete(int userId);
		ChatUser[] Get();
		ChatUser[] Get(Func<ChatUser, bool> filter);
		void Update(int userId, ChatUser user);
	}
}