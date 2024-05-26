import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const WaitingRoom=()=>
{

    const [userName,setUserName]=useState();
    const [chatRoom,setChatRoom]=useState();

   async  function handleSubmit(e)
   {
    e.preventDefault();
   }

   const handleUserName=(e)=>
    {
        setUserName(e.target.value);
    }

    const handleChatRoom=(e)=>
    {
            setChatRoom(e.target.value);
    }

    return <div>
        <form  onSubmit={handleSubmit}>
          

            <TextField label="UserName" onChange={handleUserName} value={userName} sx={{marginTop:'2%'}}></TextField><br></br>
            <TextField label="ChatRoom" onChange={handleChatRoom} value={chatRoom} sx={{marginTop:'2%'}}></TextField><br></br>
            <Button variant="contained" color="success" sx={{marginTop:'2%'}} type="submit">Join</Button>

            
           

        </form>
    </div>


}

export default WaitingRoom;