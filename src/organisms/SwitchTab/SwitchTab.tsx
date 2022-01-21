import React from 'react';
import {Tabs, Tab} from '@mui/material'
import CurrentBooks from '../../utils/CurrentBooks/CurrentBooks';
import FinishedBooks from '../../utils/FinishedBooks/FinishedBooks';
interface Props{
    searchTerm:string
}
const SwitchTab=(props:Props)=> {
    const [value,setValue]= React.useState(0)
    const handleTabs=(e:React.SyntheticEvent<Element, Event> , val: number)=>{
        setValue(val)
        }
    const changeTab=(val:number)=>{
        setValue(val)
    }
    return (
        <div style={{zIndex:-1}}> 
    <Tabs value={value} onChange={handleTabs} style={{marginLeft:"15%",color:'green'}}>
      <Tab  label="Currently reading" style={{textTransform:"none",width:"304px",fontWeight:700,fontSize:18,}}/>
      <Tab  label="Finished" style={{textTransform:"none",width:"304px",fontWeight:700,fontSize:18}}/>
    </Tabs>
    
    { value === 0 && <div style={{paddingTop:"2%"}}><CurrentBooks changeTab={changeTab} searchTerm={props.searchTerm}/> </div>}
    { value === 1 && <div  style={{paddingTop:"2%"}}><FinishedBooks changeTab={changeTab} searchTerm={props.searchTerm}/></div>}
        </div>
    );
}

export default SwitchTab;