import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@material-ui/core";

const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)

  const [value,setValue] = useState('')

  const  sendMessage = async ()=>{
    console.log(value);

  }

  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight - 50}}
        // alignItems={"center"}
            justify={"center"}

      >

        <div style={{marginTop: "10px", width: "80%", height: "70vh", border: "1px solid grey", overflowY: "auto"}}>

        </div>
        <Grid container
              direction={"column"}
              alignItems={"flex-end"}
              style={{width: "80%"}}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            value={value}
            onChange={e=>setValue(e.target.value)}

          />

          <Button onClick={()=>sendMessage()} variant={"outlined"}>Отправить</Button>

        </Grid>

      </Grid>
    </Container>
  );
};

export default Chat;