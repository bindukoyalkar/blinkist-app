import React from 'react';
import CurrentBooks from '../CurrentBooks'
import {render,screen } from '@testing-library/react';
import "@testing-library/jest-dom"

const mockedFuntion = jest.fn(); 
it('testing my library currently reading books', async()=>{
    render(<CurrentBooks changeTab={mockedFuntion} searchTerm='Loving'/>)

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','6.png')
    
    const nameOfBook = screen.getByText(/Loving Your Business/i);
    expect(nameOfBook).toBeInTheDocument()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Finished')
});