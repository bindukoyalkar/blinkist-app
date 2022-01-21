import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from './Heading'

export default {
  title: 'Molecule/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const MainHeading: ComponentStory<typeof Heading> = () => <Heading/>;
