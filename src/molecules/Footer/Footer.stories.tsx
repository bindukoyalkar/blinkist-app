import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer'

export default {
  title: 'Molecule/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const CustomFooter: ComponentStory<typeof Footer> =
 () => <div style={{backgroundColor:'#F1F6F4'}}><Footer></Footer></div>;
