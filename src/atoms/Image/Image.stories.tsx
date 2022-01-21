import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import logo from './logo.png';
import one from './1.png';
import  Image from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Logo: ComponentStory<typeof Image> = () => <Image path={logo}></Image>;
export const Book1: ComponentStory<typeof Image> = () => <Image path={one}></Image>;

Book1.storyName='Book'
