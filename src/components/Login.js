import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import firebase from "firebase";
import {Context} from "../index";


const Login = () => {
  const {auth} = useContext(Context)

  const login = async ()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)

  }

  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight - 50}}
            alignItems={"center"}
            justify={"center"}
      >

        <Grid
          container
          alignItems={"center"}
          justify={"center"}
          style={{width:450, background:"lightblue"}}
        >
          <Box p={10}>
            <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
          </Box>

        </Grid>

      </Grid>

    </Container>
  );
};

export default Login;