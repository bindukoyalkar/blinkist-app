import React, { useState } from 'react';
import {Typography,Grid,Button, AppBar,CssBaseline ,Toolbar, Container, TextField, InputAdornment } from '@mui/material'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from '@mui/styles';
import Image from '../../atoms/Image/Image'
import User from '../../atoms/User/User'
import Icons from '../../atoms/Icons/Icons';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
    logo:{position: 'absolute',
      paddingLeft:'0.5%',
      paddingTop:'0.5%'
    },
    search:{color: 'black',
        position: 'absolute',
        height:'20px',
        width: '20px',
        top:'40%',
        cursor:'pointer'
    },
    explore:{
        color: 'black',
        position: 'absolute',
        textAlign: 'left',
        height:'20px',
        width: '57px',
        paddingTop:'0.5%',
        cursor:'pointer',
    },
    arrowUp:{
        height:'6.5px',
        width: '10.6px',
      color: 'black',
      position: 'absolute',
      top:'40%'
    },
    avatar: {
      position: 'absolute',
      height:'26px',
      width: '13px',
       },
    arrowDown:{
        height:'6.5px',
        width: '10.6px',
      color: 'black',
      position: 'absolute', top:'25%'
    },
    myLib:{
        color: 'black',
        position: 'absolute',
        textAlign: 'left',
        paddingTop:'0.5%',cursor:'pointer'
  },
    ul:{
        listStyleType:'none',padding:'0', margin:'0',fontWeight:'fontWeightLight'
    },
    category:{
        paddingTop:'5%',
        paddingBottom:'5%',
        borderBottom: '1px solid black',
        fontWeight:'fontWeightRegular',
  },
    category1:{
        paddingTop:'5%',
        paddingBottom:'5%',
        borderBottom: '1px solid black',
        fontWeight:'fontWeightRegular',
        color:'#116BE9'
  }
  })); 
  
const innerTheme = createTheme({
    palette: {
      primary: {
        main: '#6D787E',
      },
      secondary:{
          main: '#116BE9'
      }
    },
    typography:{
        button:{
            textTransform:'none'
          }
    }
  }); 

interface Props{
    handleToggle?:any
    changeState(val:number): any
    setSearchTerm:any
}

const Dropdown=(props:Props)=>{
    const [value,setValue]=useState(0);
    const [search, setSearch ]= useState(0);
    
    const classes=useStyles();
    const expandExplore=(e:React.MouseEvent<SVGSVGElement, MouseEvent>| React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        value===0 ? setValue(1): setValue(0)
        }
    const expandSearch=(e:React.MouseEvent<SVGSVGElement, MouseEvent>, val:number)=>{
      setSearch(val)
      val===0 && props.setSearchTerm("")
    }

    const nextPage=(e: React.MouseEvent<HTMLSpanElement, MouseEvent>,value: number)=>{
        props.changeState(value)
        value===0 ? setValue(1): setValue(0)
    }
    const toMyLibrary=(e:React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        props.changeState(1)
    }

    return (
        <>
    <CssBaseline />
    <AppBar  style={{ background: '#FFFFFF'}} position='relative' elevation={0}>
      <Toolbar>
          <Container style={{marginLeft:"13%", marginTop:'1%',}}>
            <Grid container >
                <Grid item md={1.5}>
                    <Image className={classes.logo} path='logo.png' />
                </Grid>

                <Grid item md={0.5} >
                  <SearchOutlinedIcon onClick={(e) => {expandSearch(e,1)}}  className={classes.search} />
                </Grid>

              {search===0 && <> <Grid item md={0.75}  sx={{
                    ':hover': {
                      borderBottom:'3px solid #22C870'
                    },
                }}>
                <Typography className={classes.explore} 
                onClick={(e)=>expandExplore(e)} variant='body1'>Explore</Typography>
               
                </Grid>

                <Grid item md={0.25}>
                { value===0 && <KeyboardArrowDownIcon className={classes.arrowUp} />}
             { value===1 && <KeyboardArrowUpOutlinedIcon  className={classes.arrowUp} />}
                </Grid>

                <Grid item md={0.25}>
                    </Grid>

                <Grid item md={0.75}>
                    <Typography className={classes.myLib} variant='body1' onClick={(e)=>toMyLibrary(e)}>My Library</Typography>
                </Grid> </>}
              
                {search===1 && <><Grid item md={5} >

                  <TextField fullWidth onChange={(e)=>{
              props.setSearchTerm(e.target.value)
              }} label="Search by title or author" variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CloseIcon onClick={(e) => {expandSearch(e,0)}} style={{cursor:'pointer'}}/>
                      </InputAdornment>
                  )}}
                    style={{ bottom:'20%'
                    }}
                    />
                </Grid></>}

                {search===0 &&<Grid item md={4}>
                </Grid>}

                {search===1 &&<Grid item md={1}>
                </Grid>}

                <Grid item md={0.5}>
                    <User username="B" />
                </Grid>

                <Grid item md={0.5}>
                <Icons>
                    <KeyboardArrowDownIcon className={classes.arrowDown} />
                    </Icons>
                </Grid>
            </Grid>
          </Container>
      </Toolbar>
    </AppBar>

 {value===1 &&  <div style={{backgroundColor:'#F1F6F4',position:'absolute', width:'100%',zIndex:1}}>
    <Container style={{marginLeft:'15%'}}>
    <ThemeProvider theme={innerTheme}>
    <Grid container>
        <Grid item md={3}>
            <Typography className={classes.category1} variant='body1'>Explore by category</Typography>
            <ul className={classes.ul}>
                <li key={1}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} onClick={(e)=>nextPage(e,2)} startIcon={<AddAlertOutlinedIcon/>}>Entrepreneurship</Button>
                </li>
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<ScienceOutlinedIcon/>}>Science</Button>
                </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<PublicOutlinedIcon/>}>Economics</Button>
               </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<BusinessCenterOutlinedIcon/>}>Corporate Culture</Button>    
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<AccessibilityNewOutlinedIcon/>}>Psychology</Button>    
                </li>
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<SpaOutlinedIcon/>}>Nature & Environment</Button>  
               </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See recently added titles</Typography>
            <ul className={classes.ul}>
                <li key={1}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<AccountBalanceOutlinedIcon/>}>Politics</Button>
                </li>
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<ChurchOutlinedIcon/>}>Health & Nutrition</Button>
                  </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<CastleOutlinedIcon/>}>History</Button>
                </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<TipsAndUpdatesOutlinedIcon/>}>Motivation & Inspiration</Button>
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<HourglassBottomIcon/>}>Productivity</Button>
               </li>
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<TrackChangesOutlinedIcon/>}>Career & Success</Button>
                </li>
            </ul>
        </Grid>

        <Grid item md={3}>
            <Typography className={classes.category} variant='body1'>See popular titles</Typography>
            <ul className={classes.ul}>
            <li key={1}>
            <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<TimelineOutlinedIcon/>}>Marketing & Sales</Button>
                </li>
                <li key={2}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<SignalCellularAltOutlinedIcon/>}>Personal Development</Button>
                </li>
                <li key={3}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<ForumOutlinedIcon/>}>Communication Skills</Button>
                </li>
                <li key={4}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<AccountBalanceWalletOutlinedIcon/>}>Money & Investments</Button>
                </li>
                <li key={5}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<FavoriteBorderOutlinedIcon/>}>Sex & Relationship</Button>
                </li>
                <li key={6}>
                <Button variant="text" sx={{
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }} startIcon={<SchoolOutlinedIcon/>}>Education</Button>
                </li>
            </ul>
        </Grid>
    </Grid>
    </ThemeProvider>
    </Container>
    
    </div>
    
    
}
        </>
    );
}

export default Dropdown;