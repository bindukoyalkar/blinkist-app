import React from 'react';
import {Typography, Card, CardContent, Button, LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from '../../atoms/Image/Image'
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import OPENBOOK from '../../utils/OPENBOOK';
import CLOSEDBOOK from '../../utils/CLOSEDBOOK';

const useStyles = makeStyles(theme => ({
    wrapIconLeft: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        textAlign: 'left',
        paddingTop:'5%'
     },
     wrapIconRight:{
        verticalAlign: 'middle',
        display: 'inline-flex',
        textAlign: 'left',
        paddingTop:'5%',
        paddingLeft:'6%'
     },
    bookName:{
        textAlign: 'left'
    },
    authorName:{
        textAlign: 'left',
        paddingTop:'5%'
    },
    btn:{
     width:'100%',
     color:'secondary.main',
     paddingTop:'10%',
     paddingBottom:'10%'
    }
  })); 
interface Props{
    src:string,
    name:string,
    author:string,
    duration:string,
    noOfReads?:string,
    changeState?(val:number): any,
    dots?:boolean,
    button?:'add'| 'Finished' | 'Read again',
    progressBar:'none'|'full'| 'half',
    id:number,
  changeTab?(val:number):any
}

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#0365F2',
    },
  },
  typography:{
    button:{
      textTransform:'none'
    }
  }
});
const MyCard=(props:Props)=> {
    const classes=useStyles();
    const nextPage=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,val:number )=>{
      const foundInCurrentlyReading = OPENBOOK.some((obj: { name: string; }) => obj.name === 'Beyond Entrepreneurship');
      const foundInFinishedReading = CLOSEDBOOK.some((obj: { name: string; }) => obj.name === 'Beyond Entrepreneurship');
      if(props.name=== 'Beyond Entrepreneurship' && !foundInCurrentlyReading && !foundInFinishedReading){
      OPENBOOK.push({'id':2,'src':"beyondEntrepreneur.png",'name':"Beyond Entrepreneurship", 'author':"Jim Collins & Bill Lazier", 'duration':"13"})
      props.changeState && props.changeState(val)
      }
    }

    const toRepeat=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id:number)=>{
      const book=CLOSEDBOOK.filter((book: { id: number; }) => book.id=== id)
      OPENBOOK.push(...book)
      const index=CLOSEDBOOK.findIndex((eachBook: { id: number; }) => eachBook.id=== id);
      CLOSEDBOOK.splice(index,1)
      props.changeTab&& props.changeTab(0)
    }

    const toFinish=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nameOfBook:string)=>{
      const book=OPENBOOK.filter((thisBook: { name: string; })=> thisBook.name=== nameOfBook)
      CLOSEDBOOK.push(...book)
      const index=OPENBOOK.findIndex((myBook: { name: string; }) => myBook.name=== nameOfBook);
      OPENBOOK.splice(index,1)
      props.changeTab&& props.changeTab(1)
    }

    return (
        <div>
    <Card sx={{ maxWidth: 284 }} >
        <Image path={props.src} width='100%' />
   
        <CardContent>
            <Typography className={classes.bookName} variant="subtitle1">
                {props.name}
            </Typography>

            <Typography className={classes.authorName} variant="body1">
                {props.author}
            </Typography>

              <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                <Typography variant="body2" className={classes.wrapIconLeft} >
                    <AccessTimeIcon /> {props.duration}-minute read
                    </Typography>
                    {props.noOfReads &&  
                    <Typography variant="body2" className={classes.wrapIconRight} >  
                    <PersonOutlineOutlinedIcon /> {props.noOfReads}k reads </Typography>
                    }    
            </div>
        </CardContent>
     { props.dots && <MoreHorizIcon style={{marginLeft:'88%'}}/> }
        { props.button==='add' && 
        <ThemeProvider theme={innerTheme}>
        <Button className={classes.btn} sx={{
    ':hover': {
      backgroundColor: 'primary.main', 
      color: '#FFFFFF',
    },
  }} onClick={(e)=>nextPage(e,3)} variant='text' startIcon={<AddIcon/>}>
      <Typography variant='body1'>
          Add to library
          </Typography>
      </Button>
      </ThemeProvider>}



      { props.button==='Finished' && <ThemeProvider theme={innerTheme}>
       <Button className={classes.btn} sx={{
    ':hover': {
      backgroundColor: 'primary.main', 
      color: '#FFFFFF',
    },
  }}  onClick={(e)=>toFinish(e,props.name)} variant='text'>
      <Typography variant='body1'>
          {props.button}
          </Typography>
      </Button> </ThemeProvider>}



      { props.button==='Read again'  && <ThemeProvider theme={innerTheme}>
       <Button className={classes.btn} sx={{
    ':hover': {
      backgroundColor: 'primary.main', 
      color: '#FFFFFF',
    },
  }} onClick={(e)=>toRepeat(e,props.id)} variant='text'>
      <Typography variant='body1'>
          {props.button}
          </Typography>
      </Button> </ThemeProvider>}

      {props.progressBar==='half' && <LinearProgress variant='determinate' value={30} color='info' style={{height: "10px"}}/> }
      
      {props.progressBar==='full' && <LinearProgress variant='determinate' value={100} color='info' style={{height: "10px"}}/> }
      
        </Card> 
      </div>
    );
}

export default MyCard;