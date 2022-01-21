import { Grid, Container, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    logo:{
        height: '24px',
        width: '99.09677124023438px',
    },
    quote:{
    fontSize: '24px',
    fontStyle: 'normal',
    lineHeight: '32px',
    textAlign: 'left',
    },
    ul:{
        listStyleType: 'none',
    },
    li:{
        display: 'block',
    textDecoration: 'none'
    }


}));
function Footer() {
    const classes= useStyles();
    return (
        <>
        <Container  style={{marginLeft:"13%", marginTop:'3%',}}>
                <Grid container spacing={2}>
        <Grid item md={4}>
          <Grid>
          <img src='logo.png' alt="logo" className={classes.logo}/><br></br>
          <Typography style={{fontSize: '24px',lineHeight: '32px',textAlign: 'left',fontWeight: '500',color:'#0365F2',}} 
    variant='subtitle1'>Big ideas in small packages <br></br>
            Start learnign now
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={2}>
            <Grid>
                <ul style={{listStyleType:'none',padding:'0', margin:'0'}}>
                    <li><Typography style={{fontWeight:700}} variant='body1'>Editorial</Typography></li>
                    <li><Typography variant='body2'>Book lists</Typography></li>
                    <li><Typography variant='body2'>What is Nonfiction?</Typography></li>
                    <li><Typography variant='body2'>What to read next?</Typography></li>
                    <li><Typography variant='body2'>Benefits of reading</Typography></li>
                </ul>
            </Grid>
        </Grid>

        <Grid item md={2}>
            <Grid>
            <ul style={{listStyleType:'none',padding:'0', margin:'0'}}>
                    <li><Typography style={{fontWeight:700}} variant='body1'>Useful links</Typography></li>
                    <li><Typography variant='body2'>Pricing</Typography></li>
                    <li><Typography variant='body2'>Blinkist business</Typography></li>
                    <li><Typography variant='body2'>Gift cards</Typography></li>
                    <li><Typography variant='body2'>Blinkist magaine</Typography></li>
                    <li><Typography variant='body2'>Contact & help</Typography></li>
                </ul>
            </Grid>
        </Grid>

        <Grid item md={2}>
            <Grid>
            <ul style={{listStyleType:'none',padding:'0', margin:'0'}}>
                   <li><Typography style={{fontWeight:700}} variant='body1'>Company</Typography></li>
                   <li><Typography variant='body2'>About</Typography></li>
                   <li><Typography variant='body2'>Careers</Typography></li>
                   <li><Typography variant='body2'>partners</Typography></li>
                   <li><Typography variant='body2'>Code of Conduct</Typography></li>
                </ul>
            </Grid>
        </Grid>
    </Grid>
    <Typography variant='caption'>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
            </Container>
            </>    
        
    );
}

export default Footer;