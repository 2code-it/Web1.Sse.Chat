using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Web1.Sse.ChatApi.Models;

namespace Web1.Sse.ChatApi.Services
{
	public class UserRepository : IUserRepository
	{
		public UserRepository()
		{
			_userProperties = typeof(ChatUser).GetProperties().Where(x => x.CanWrite).ToArray();
		}

		private readonly List<ChatUser> _users = new List<ChatUser>();
		private readonly object _lock = new object();
		private readonly PropertyInfo[] _userProperties;
		private int _userIdSource;

		public int Add(ChatUser user)
		{
			ThrowOnExistingUserName(user.Name);
			lock (_lock)
			{
				user.Id = ++_userIdSource;
				_users.Add(user);
				return _userIdSource;
			}
		}

		public void Update(int userId, ChatUser user)
		{
			ChatUser existing = GetOrThrowOnNonExistingUser(userId);
			if (existing.Name != user.Name) ThrowOnExistingUserName(user.Name);
			CopyProperties(user, existing, new[] { nameof(ChatUser.Id) });
		}

		public void Delete(int userId)
		{
			ChatUser existing = GetOrThrowOnNonExistingUser(userId);
			lock (_lock)
			{
				_users.Remove(existing);
			}
		}

		public ChatUser[] Get()
			=> _users.ToArray();

		public ChatUser[] Get(Func<ChatUser, bool> filter)
			=> _users.Where(filter).ToArray();

		private ChatUser GetOrThrowOnNonExistingUser(int userId)
			=> _users.FirstOrDefault(x => x.Id == userId) ?? throw new InvalidOperationException("User does not exist");

		private void ThrowOnExistingUserName(string userName)
		{
			if (_users.Any(x => x.Name == userName)) throw new InvalidOperationException($"User name {userName} already exists");
		}

		private void CopyProperties(ChatUser source, ChatUser target, string[] excludedPropertyNames)
		{
			foreach (var property in _userProperties)
			{
				if (excludedPropertyNames.Contains(property.Name)) continue;
				object? value = property.GetValue(source, null);
				property.SetValue(target, value, null);
			}
		}
	}
}
