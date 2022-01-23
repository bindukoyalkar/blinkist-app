import React, {  useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField ,Grid,Typography, Container, InputAdornment} from '@mui/material';
import MyCard from '../MyCard/MyCard';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  sideHeading:{
    paddingTop:'3%',
    paddingBottom:'5%',
    height: '30px',
  },
})); 


interface Props{
  changeState(val:number): any
}

interface BookType{
  id:number,
  src:string,
  name:string,
  author:string,
  duration:string,
  noOfReads?:string,
}

const innerTheme = createTheme({
  palette: {
    primary: {
      main: '#116BE9',
    }
  },
});  

const trendingData=`{"books":[{"id":11,"src":"being-boss.png","name":"Being Boss", "author":"Kathleen Shannon and Emily...", "duration":"13"},
{"id":10,"src":"beyondEntrepreneur.png","name":"Beyond Entrepreneurship", "author":"Jim Collins & Bill Lazier", "duration":"12","noOfReads":"1.9"},
{"id":2,"src":"2.png","name":"Employee to Entrepreneur", "author":"Steve Glaveski", "duration":"15"},
{"id":4,"src":"4.png","name":"The Fate of Food", "author":"Amanda Little", "duration":"12","noOfReads":"16"},
{"id":5,"src":"5.png","name":"Lives of the Stoics", "author":"Ryan Holiday, Stephen Hansel", "duration":"13"},
{"id":6,"src":"6.png","name":"Loving Your Business", "author":"Debbie King", "duration":"13"}
]}`
const data1= JSON.parse(trendingData);
const trending= data1.books;

const newlyAddedData=`{"books":[{"id":7,"src":"7.png","name":"The Lonely Century","author":"Noreena Hertz","duration":"15"},
{"id":8,"src":"8.png","name":"Eat Better, Feel Better","author":"Giada De Laurentiis","duration":"13","noOfReads":"1.9"},
{"id":9,"src":"9.png","name":"Dropshipping","author":"James Moore","duration":"12"}]}`

const data2=JSON.parse(newlyAddedData);
const justAdded= data2.books;

const featuredData=`{"books":[{"id":1,"src":"1.png","name":"Bring Your Human to Work","author":"Erica Keswin","duration":"13"},
{"id":3,"src":"3.png","name":"Doesn’t Hurt to Ask","author":"Trey Gowdy","duration":"13","noOfReads":"1.9"},
{"id":10,"src":"beyondEntrepreneur.png","name":"Beyond Entrepreneurship","author":"Jim Collins & Bill Lazier","duration":"13"}]}`

const data3=JSON.parse(featuredData);
const featured= data3.books;



const SearchBar=(props:Props)=> {
  const [searchTerm,setSearchTerm]= useState('')
  const classes=useStyles();
    return (
        <>
        <ThemeProvider theme={innerTheme}>
          <TextField style={{width:'750px',marginLeft:'20%', marginTop:'2%'}}  onChange={(e)=>{
              setSearchTerm(e.target.value);
              }}   label="Search by title or author" variant="standard"  InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
              ),
            }}/>
        </ThemeProvider>
   
<Container   style={{paddingLeft:"7%",paddingRight:"7%"}}>
<Typography className={classes.sideHeading} variant='h6'>Trending blinks</Typography>
    <Grid container rowSpacing={2} >
    {trending.filter((val:any)=> condition(val,searchTerm)).map((val:any,key:any) => {
    return ( <Grid item xs={12} sm={6} md={4}>
        { val.name!=='Beyond Entrepreneurship' &&    
    <MyCard progressBar='half' dots={true} id={val.id} key={val.id} src={val.src} name={val.name} author={val.author} duration={val.duration}
    noOfReads={val.noOfReads} /> }
    {val.name=== 'Beyond Entrepreneurship' && <MyCard changeState={props.changeState} button='add' progressBar='none' id={val.id} key={val.id} src={val.src} name={val.name} author={val.author} duration={val.duration}
    noOfReads={val.noOfReads} /> 
    }
</Grid> ); })} 
</Grid>
</Container>

<Container   style={{paddingLeft:"7%",paddingRight:"7%"}}>
<Typography className={classes.sideHeading} variant='h6'>Just Added</Typography>
<Grid container rowSpacing={2} >
{ justAdded.filter((val:any)=> condition(val,searchTerm)).map((book:BookType) =><Grid item xs={12} sm={6} md={4}> <MyCard id={book.id} button='add' progressBar='none'
       src={book.src} name={book.name}
      author={book.author} duration={book.duration} noOfReads={book.noOfReads}/>
       </Grid> )}
       </Grid>
       </Container>

    <Container  style={{paddingLeft:"7%",paddingRight:"7%"}}>
    <Typography className={classes.sideHeading} variant='h6'>Featured Audio Links</Typography>
  <Grid container rowSpacing={2} >
  { featured.filter((val:any)=> condition(val,searchTerm)).map((book:BookType) =><Grid item xs={12} sm={6} md={4}> <MyCard id={book.id} button='add' progressBar='none'
    src={book.src} name={book.name}
  author={book.author} duration={book.duration} noOfReads={book.noOfReads}/>
    </Grid> )}
    </Grid>
    </Container>
</> );

}

export default SearchBar;

function condition(val:any,searchTerm:string){
  if (searchTerm === "" || val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.author.toLowerCase().includes(searchTerm.toLowerCase())){
  return val
  }
}
