import React from 'react';
import "@testing-library/jest-dom"
import MyCard from '../MyCard'
import {fireEvent, render,screen } from '@testing-library/react';

it('render beyond Entrepreneurship card', async()=>{
    render(<MyCard  progressBar='none' button='add'
    id={1} key={1} src="beyondEntrepreneur.png" name="Beyond Entrepreneurship"
    author="Jim Collins & Bill Lazier" duration="13"/>);

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','beyondEntrepreneur.png')
    
    const nameOfBook = screen.getByText(/Beyond Entrepreneurship/i);
    expect(nameOfBook).toBeInTheDocument()
    
    const clock=screen.getByTestId('AccessTimeIcon')
    fireEvent.click(clock)
    expect(clock).toBeVisible()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Add to library')
});

it('render being boss finished card', async()=>{
    
    render(<MyCard  progressBar='full' button='Read again'
    id={11} key={11} src="being-boss.png" name="Being Boss"
    author="Kathleen Shannon and Emily..." duration="13"/>);

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','being-boss.png')
    
    const nameOfBook = screen.getByText(/Being Boss/i);
    expect(nameOfBook).toBeInTheDocument()
    
    const clock=screen.getByTestId('AccessTimeIcon')
    fireEvent.click(clock)
    expect(clock).toBeVisible()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Read again')
});

it('render Dropshipping currently reading card', async()=>{
    
    render(<MyCard progressBar='half' button='Finished'
    id={9} key={9} src="9.png" name="Dropshipping"
    author="James Moore" duration="12"/>);

    const image= screen.getByRole('img')
    expect(image).toHaveAttribute('src','9.png')
    
    const nameOfBook = screen.getByText(/Dropshipping/i);
    expect(nameOfBook).toBeInTheDocument()
    
    const clock=screen.getByTestId('AccessTimeIcon')
    fireEvent.click(clock)
    expect(clock).toBeVisible()

    const button=screen.getByRole('button')
    expect(button).toHaveTextContent('Finished')
});