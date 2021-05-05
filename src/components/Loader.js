import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import "./Loader.scss"

const Loader = () => {
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

        >

          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>

      </Grid>

    </Container>
  );
};

export default Loader;