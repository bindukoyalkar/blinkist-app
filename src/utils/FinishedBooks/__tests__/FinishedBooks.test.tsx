import React from 'react';
import FinishedBooks from '../FinishedBooks'
import {render,screen } from '@testing-library/react';
import "@testing-library/jest-dom"

const mockedFuntion = jest.fn(); 
it('testing my library finished reading books', async()=>{
    render(<FinishedBooks changeTab={mockedFuntion} searchTerm='being'/>)
    
    const nameOfBook = screen.getByText(/Being Boss/i);
    expect(nameOfBook).toBeInTheDocument()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Read again')
});