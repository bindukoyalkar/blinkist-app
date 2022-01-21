import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icons from './Icons';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default{
    title:'Atoms/Icon',
    component:Icons ,
} as ComponentMeta<typeof Icons>;

export const Search: ComponentStory<typeof Icons> = (args) => (
<Icons {...args}>
      <SearchOutlinedIcon />
    </Icons>
  );

export const DropDown: ComponentStory<typeof Icons> = (args) => (
    <Icons {...args}>
      <KeyboardArrowDownIcon />
    </Icons>
  );


