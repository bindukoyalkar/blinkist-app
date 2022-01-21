import React from 'react';
import "@testing-library/jest-dom"
import Icons from '../Icons';
import {render,screen } from '@testing-library/react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

it('check icon name', async()=>{
    render(<Icons><SearchOutlinedIcon /></Icons>);
    const searchIcon=screen.getByTestId('SearchOutlinedIcon')
    expect(searchIcon).toBeVisible()
});