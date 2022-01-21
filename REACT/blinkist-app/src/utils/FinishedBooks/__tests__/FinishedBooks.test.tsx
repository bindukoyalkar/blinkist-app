import React from 'react';
import FinishedBooks from '../FinishedBooks'
import {render,screen } from '@testing-library/react';

const mockedFuntion = jest.fn(); 
it('testing my library finished reading books', async()=>{
    render(<FinishedBooks changeTab={mockedFuntion} searchTerm='being'/>)

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','being-boss.png')
    
    const nameOfBook = screen.getByText(/Being Boss/i);
    expect(nameOfBook).toBeInTheDocument()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Read again')
});