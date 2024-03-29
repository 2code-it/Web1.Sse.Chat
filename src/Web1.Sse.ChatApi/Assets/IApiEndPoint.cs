using Microsoft.AspNetCore.Builder;

namespace Web1.Sse.ChatApi.Assets
{
	public interface IApiEndPoint
	{
		void Map(WebApplication app);
	}
}
