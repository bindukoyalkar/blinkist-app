import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyTabs from './MyTabs'

export default {
  title: 'Molecule/MyTabs',
  component: MyTabs,
} as ComponentMeta<typeof MyTabs>;

export const MainHeading: ComponentStory<typeof MyTabs> = () => <MyTabs/>;