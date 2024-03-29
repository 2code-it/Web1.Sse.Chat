using System;

namespace Web1.Sse.ChatApi.Models
{
	public class ChatMessage
	{
		public int Id { get; set; }
		public DateTime? Created { get; set; }
		public int FromUserId { get; set; }
		public int[] ToUserIds { get; set; } = Array.Empty<int>();
		public string Text { get; set; } = string.Empty;
	}
}
