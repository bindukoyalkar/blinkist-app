import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import Footer from './molecules/Footer/Footer';
import SwitchTab from './organisms/SwitchTab/SwitchTab';
import Dropdown from './organisms/Dropdown/Dropdown';
import SearchBar from './organisms/SearchBar/SearchBar';
import Banner from './molecules/Banner/Banner';
import BookDetail from './utils/BookDetail/BookDetail';
import Heading from './molecules/Heading/Heading';

const useStyles = makeStyles(theme => ({

})); 

function App(){
  const classes=useStyles();
  const [page,setPage]=useState(1)
  const [searchTerm,setSearchTerm]= useState('')
  const changePage=(val: number)=>{
      console.log(val)
      setPage(val)
      console.log(val)
      }
  
  return (
    <>
    <div >
     <Dropdown changeState={changePage} setSearchTerm={setSearchTerm}/>
    </div>

{ page===1 && <div> <Heading />

   <SwitchTab searchTerm={searchTerm} /> </div> }
   
  { page===2 && <div>
    <Banner />
{/*     <div style={{marginLeft:'20%', marginTop:'2%'}}> */}
    <SearchBar  changeState={changePage}/>
{/*     </div> */}
    </div>  }

{page===3 && <BookDetail changeState={changePage} />}

{page===4 && <div> 
  <Heading />
   <SwitchTab searchTerm={searchTerm} /> </div>}
   <div style={{zIndex:0,backgroundColor:'#F1F6F4',marginTop:'5%'}}>
    <Footer />
    </div>

    </>
  );
}
export default App;
