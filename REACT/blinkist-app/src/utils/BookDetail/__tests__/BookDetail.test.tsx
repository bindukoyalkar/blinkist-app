import React from 'react';
import BookDetail from '../BookDetail'
import {render,screen } from '@testing-library/react';

const mockedFuntion = jest.fn(); 
it('beyond Entrepreneurship book detail page', async()=>{
    render(<BookDetail changeState={mockedFuntion}/>)

    const description = screen.getByRole('heading',{name:/Turning Your Business into/i})
    expect(description.textContent).toBe('Turning Your Business into an Enduring Great Company')

    const image=screen.getByRole('img')
    expect(image).toHaveAttribute('src',"beyondEntrepreneur.png")

    const buttons= screen.getAllByRole('button')
    expect(buttons.length).toEqual(3)

    const readNowButton=screen.getByRole('button',{name:"Read now"})
    expect(readNowButton).not.toBeDisabled();

    const finishedReading=screen.getByRole('button',{name:"Finished Reading"})
    expect(finishedReading).not.toBeDisabled();

    const kindle=screen.getByRole('button',{name:"Send to Kindle"})
    expect(kindle).not.toBeDisabled();
    
    const clock=screen.getByTestId('AccessTimeIcon')
    expect(clock).toBeInTheDocument()

    const arrow=screen.getByTestId('ArrowForwardIcon')
    expect(arrow).toBeInTheDocument()

 
});