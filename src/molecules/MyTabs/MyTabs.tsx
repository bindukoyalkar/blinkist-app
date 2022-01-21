import React from 'react';
import {Tabs, Tab} from '@mui/material'
interface Props{

}
const MyTabs=(props:Props)=> {
    return (
        <div style={{marginTop:'5%', marginBottom:'5%'}}>
    <Tabs value='1' style={{color:'green'}}>
      <Tab value='1' label="Synopsis" style={{textTransform:"none",width:'200px',fontWeight:700}}/>
      <Tab value='2' label="Who is it for?" style={{textTransform:"none",width:"200px",fontWeight:700}} />
      <Tab value='3' label="About the author" style={{textTransform:"none",width:'200px',fontWeight:700}} />
    </Tabs>
        </div>
    );
}

export default MyTabs;