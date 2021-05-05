import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";
import {LOGIN_ROUTE} from "../utils/const";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar style={{background: "grey"}} position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          TChat
        </Typography>

        <Grid container justify={'flex-end'}>

          {user ?
            <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Войти</Button>
            </NavLink>
          }

        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;