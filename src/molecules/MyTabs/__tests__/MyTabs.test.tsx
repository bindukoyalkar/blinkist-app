import React from 'react';
import MyTabs from '../MyTabs';
import {render,screen } from '@testing-library/react';

it('render the tabs', async()=>{
    render(<MyTabs />);
    const tab1=screen.getByRole('tab',{name:'Synopsis'})
    expect(tab1).toHaveAttribute("aria-selected", "true");
    const tab2=screen.getByRole('tab',{name:'Who is it for?'})
    expect(tab2).toHaveAttribute("aria-selected", "false");
    const tab3=screen.getByRole('tab',{name:'About the author'})
    expect(tab3).toHaveAttribute("aria-selected", "false");
});