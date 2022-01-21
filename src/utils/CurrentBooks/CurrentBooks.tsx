import { Grid ,Container} from '@mui/material'
import OPENBOOK from '../OPENBOOK';
import MyCard from '../../organisms/MyCard/MyCard';
interface Props{
  changeTab(val:number): any
  searchTerm:string
}

interface BookType{
  id:number,
  src:string,
  name:string,
  author:string,
  duration:string,
  noOfReads?:string,
}

function CurrentBooks(props:Props){
    return (
    <Container style={{paddingLeft:"7%",paddingRight:"7%"}}>
      <Grid container rowSpacing={2} >
      { OPENBOOK.filter((val:any)=>{
      if(props.searchTerm === "")
        return val 
      else if (val.name.toLowerCase().includes(props.searchTerm.toLowerCase()) 
      || val.author.toLowerCase().includes(props.searchTerm.toLowerCase())){
        return val
      }}).map((book:BookType) =><Grid item xs={12} sm={6} md={4}> <MyCard  changeTab={props.changeTab} 
      progressBar='half' button='Finished'
      id={book.id} key={book.id} src={book.src} name={book.name}
      author={book.author} duration={book.duration} noOfReads={book.noOfReads}/>
       </Grid> )} 
      </Grid>
      </Container>
    );
}
export default CurrentBooks;