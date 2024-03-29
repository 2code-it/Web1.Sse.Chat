using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Reflection;
using Web1.Sse.ChatApi.Assets;

namespace Web1.Sse.ChatApi.EndPoints
{
	public static class EndPointExtensions
	{
		public static void UseApiEndPoints(this WebApplication app)
		{
			var endpointTypes = Assembly.GetExecutingAssembly().ExportedTypes.Where(x => x.GetInterface(nameof(IApiEndPoint)) is not null);
			foreach (var endpointType in endpointTypes)
			{
				IApiEndPoint endPoint = (IApiEndPoint)ActivatorUtilities.CreateInstance(app.Services, endpointType);
				endPoint.Map(app);
			}
		}
	}
}
