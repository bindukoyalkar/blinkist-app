import {  Typography, Button ,Grid, Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../../atoms/Image/Image'
import MyTabs from '../../molecules/MyTabs/MyTabs';
import OPENBOOK from '../OPENBOOK';
import CLOSEDBOOK from '../CLOSEDBOOK';
interface Props{
    changeState(val:number): any
}
const useStyles = makeStyles((theme) => ({
    body2:{
        height: '20px',
        width: '168px',
        textAlign: 'left',
    },
    heading:{
        textAlign: 'left',
        paddingTop:'4%',
        
    },
    content:{
        height: '100px',
        width: '600px',
        left: '264px',
        top: '624px',
    },
    dimensions:{
        width:'304px',
        height:'304px'
    },
    sub2:{
        fontWeight:'400',
        paddingTop:'3%'
    }
    ,
    wrapIconLeft: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        paddingTop:'1%'
     },
     author:{
         paddingTop:'1%'
     },
     image:{
         paddingTop:'25%'
     }

}))
const BookDetail=(props:Props)=> {
    const classes= useStyles();
    const submit=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string, val:number)=>{
            //const filtered=OPENBOOK.filter((book: { name: string; }) => name!== book.name )
            CLOSEDBOOK.push({'id':2,'src':"beyondEntrepreneur.png",'name':"Beyond Entrepreneurship", 'author':"Jim Collins & Bill Lazier", 'duration':"13"})
            OPENBOOK.splice(9,2);
            props.changeState(val);
    }
    return (
        <div style={{marginLeft:'150px', marginTop:'75px'}}>
            <Container>
                <Grid container>
                    <Grid item md={7}>
                    <Typography variant='body2' className={classes.body2}>Get the key ideas from</Typography>
                    <Typography className={classes.heading} variant='h1'>Beyond Entrepreneurship 2.0</Typography>
                    <Typography variant="subtitle2" className={classes.sub2}>Turning Your Business into an Enduring Great Company</Typography>
                    <Typography variant='body1' className={classes.author}>By Jim Collins and Bill Lazier</Typography>
                    <Typography variant='caption' className={classes.wrapIconLeft}><AccessTimeIcon /> 15-minute read</Typography><br></br>
                    <Button variant="outlined" style={{ marginRight:'2%',fontWeight:'400', marginTop:'6%'}} >Read now</Button>
                    <Button variant="contained" onClick={(e)=>submit(e,"Beyond Entrepreneurship",4)} style={{marginRight:'2%',fontWeight:'400', marginTop:'6%'}}>Finished Reading</Button>
                    <Button variant="text" style={{ color:'black', fontWeight:'400', marginTop:'6%'}} endIcon={<ArrowForwardIcon />}>Send to Kindle</Button>
                    <MyTabs />
                    <Typography variant='body2' className={classes.content}>Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.</Typography>
                </Grid>
                <Grid item md={2}>
                <Image path='beyondEntrepreneur.png' className={classes.image}/>
                </Grid>
                </Grid>
            </Container>
            <br></br>
            <br></br>
            
               </div>
    );
}

export default BookDetail;