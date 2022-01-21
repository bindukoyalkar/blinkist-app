import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: 'Organism/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template:ComponentStory<typeof SearchBar>= (args) => <SearchBar {...args} />

export const Search= Template.bind({});