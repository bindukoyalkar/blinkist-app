import React from 'react';
import App from './App'
import {render,screen } from '@testing-library/react';

it('render app', async()=>{
    render(<App/>)
    const explore= screen.getByText('Explore');
    expect(explore).toBeInTheDocument()

    const searchIcon=screen.getByTestId('SearchOutlinedIcon')
    expect(searchIcon).toBeInTheDocument()
});