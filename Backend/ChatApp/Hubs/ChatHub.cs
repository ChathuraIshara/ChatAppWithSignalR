using ChatApp.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Hubs
{
    public class ChatHub:Hub
    {

        public async Task joinChat(UserConnection conn)
        {
            await Clients.All.SendAsync("ReceiveMessage", "admin", $"{conn.userName} has joined");
        }

        public async Task joinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.chatRoom);
            await Clients.Group(conn.chatRoom).SendAsync("ReceiveMessage","admin",$"{conn.userName} has joined {conn.chatRoom}");
        }
    }
}
