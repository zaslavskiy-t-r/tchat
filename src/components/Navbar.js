import React from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";

const Navbar = () => {
  const user = true

  return (
    <AppBar style={{background: "grey"}} position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          TChat
        </Typography>

        <Grid container justify={'flex-end'}>

          {user ?
            <Button variant={"outlined"}>Выйти</Button>
          :
            <Button variant={"outlined"}>Войти</Button>
          }

        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;