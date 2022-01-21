import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SwitchTab from './SwitchTab';

export default {
  title: 'Organism/SwitchTab',
  component: SwitchTab,
} as ComponentMeta<typeof SwitchTab>;


const Template:ComponentStory<typeof SwitchTab>= (args) => <SwitchTab {...args} />

export const Tab= Template.bind({});
Tab.args={
  searchTerm:''
};