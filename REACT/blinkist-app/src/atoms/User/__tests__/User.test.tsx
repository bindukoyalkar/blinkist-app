import React from 'react';
import User from '../User';
import {render,screen } from '@testing-library/react';

it('check user avatar alphabet', async()=>{
    render(<User username='B' />);
    const customAvatar = screen.getByText(/b/i);
    expect(customAvatar).toHaveTextContent('B')
});