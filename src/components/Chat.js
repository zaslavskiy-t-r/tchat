import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Container, Grid} from "@material-ui/core";

const Chat = () => {
  const {auth,firestore} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
   <Container>
     <Grid container
           style={{height: window.innerHeight - 50}}
           // alignItems={"center"}
           justify={"center"}

     >

       <div style={{marginTop:"10px", width:"80%", height:"70vh", border:"1px solid grey", overflowY:"auto"}}>

       </div>
       <Grid>

       </Grid>

     </Grid>
   </Container>
  );
};

export default Chat;