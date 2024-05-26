import { Container, Typography } from "@mui/material";
import WaitingRoom from "./WaitingRoom";

const Homepage=()=>
{

    return <div>
        <Typography variant="h2" sx={{fontSize:'35px',marginBottom:'2%'}}>Welcome to the ChatApp</Typography>
        <WaitingRoom/>
    </div>



}

export default Homepage;