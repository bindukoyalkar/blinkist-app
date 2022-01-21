import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
interface Props{

}

const useStyles = makeStyles(theme => ({
    mainHeading:{
      marginLeft:"15%",
      marginTop:'3%',
      marginBottom:'2%'
    },
  }));

const Heading=(props:Props)=> {
    const classes= useStyles()
    return (
        <main  className={classes.mainHeading}>
        <Container maxWidth="lg">
        <Typography variant="h1" >
          My Library
        </Typography>
        </Container>
    </main> 
    );
}

export default Heading;