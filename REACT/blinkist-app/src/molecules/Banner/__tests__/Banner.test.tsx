import React from 'react';
import Banner from '../Banner';
import {render,screen } from '@testing-library/react';

it('render banner', async()=>{
    render(<Banner />);
    const banner=screen.getByRole('heading',{name:'Explore Books on entrepreneurship'});
    expect(banner).toHaveTextContent('Explore Books on entrepreneurship');
});