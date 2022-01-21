import React from 'react';

interface Source{
    path:string,
    width?:string,
    height?:string,
    className?:string
}
export const Image=(props:Source)=> {
    return (
        <img src={props.path} alt="logo" width={props.width} height={props.height} 
        className={props.className} />
    );
}

export default Image;