namespace Web1.Sse.ChatApi.Models
{
	public class SystemMessage
	{
		public SystemMessage(string messageType, object data)
		{
			MessageType = messageType;
			Data = data;
		}

		public const string UserModifiedMessageType = "UserModified";
		public const string UserAddedMessageType = "UserAdded";
		public const string UserRemovedMessageType = "UserRemoved";

		public string MessageType { get; set; }
		public object Data { get; private set; }

	}
}
