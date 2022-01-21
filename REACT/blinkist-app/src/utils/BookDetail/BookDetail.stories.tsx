import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookDetail from './BookDetail';

export default {
  title: 'Utils/BookDetail',
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>;

const Template:ComponentStory<typeof BookDetail>= (args) => <BookDetail {...args} />

export const Detail= Template.bind({});
