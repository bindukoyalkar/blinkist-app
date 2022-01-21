import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../../atoms/Image/Image';
import { makeStyles } from '@mui/styles';

interface Props{

}

const useStyles = makeStyles(theme => ({size:
{height:'230px' , width:'249px', top:'17px',left:'618px'},
}));

const Banner=(props:Props)=> {
    const classes= useStyles();
    return (
        <>
        <div>
            <Container  style={{backgroundColor:'#F1F6F4',width:'912px',height:'264px'}}>
                <Grid container>
                    <Grid item md={8}>
                        <Typography style={{height: '90px',width: '319px',
        paddingLeft: '35px',paddingTop: '35px',fontSize: '34px',fontStyle: 'normal',fontWeight: '700',
        lineHeight: '45px',textAlign: 'left',}} variant='h1'>
                            Explore Books on entrepreneurship</Typography>

            <Typography style={{height: '69px',width: '461px',
        paddingLeft: '35px',paddingTop: '12%',fontSize: '16px',fontStyle: 'normal',fontWeight: '400',
        lineHeight: '23px',textAlign: 'left',}} variant='subtitle2'>
            Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
            </Typography>
            </Grid>
            
            <Grid item md={4}>
            <Image path='girl.png' className={classes.size}/>
                    </Grid>
                </Grid>
            </Container>
        </div>

        </>
    );
}

export default Banner;