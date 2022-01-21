import React from 'react';
import {Avatar} from '@mui/material'
interface Props{
    username:string,
    className?: string
}
const User=(props:Props) =>{
    return (
        <Avatar sx={{ bgcolor: '#69A6E3' }} className={props.className} >{props.username}</Avatar>
    );
}
export default User;