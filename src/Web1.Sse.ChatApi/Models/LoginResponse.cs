namespace Web1.Sse.ChatApi.Models
{
	public class LoginResponse
	{
		public int UserId { get; set; }
		public string Token { get; set; } = string.Empty;
	}
}
