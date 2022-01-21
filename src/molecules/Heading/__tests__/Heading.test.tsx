import React from 'react';
import Heading from '../Heading';
import {render,screen } from '@testing-library/react';

it('render My Library main Heading', async()=>{
    render(<Heading />);
    expect(screen.getByRole('heading')).toHaveTextContent('My Library');
});