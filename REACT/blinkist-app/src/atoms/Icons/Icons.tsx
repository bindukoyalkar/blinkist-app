import React from 'react';
import IconButton from '@mui/material/IconButton';
interface Props{
    children?:any;
    className?:string
}
const Icons=(props:Props)=> {
    return (
        <IconButton className={props.className} >
            {props.children}
        </IconButton>
    );
}

export default Icons;