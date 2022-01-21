import React from 'react';
import "@testing-library/jest-dom"
import Image from '../Image';
import {render,screen } from '@testing-library/react';

it('check image src', async()=>{
    render(<Image path='1.png'/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '1.png');
});