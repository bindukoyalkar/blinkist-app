import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyCard from './MyCard';

export default {
  title: 'Organism/MyCard',
  component: MyCard,
} as ComponentMeta<typeof MyCard>;

export const Resting: ComponentStory<typeof MyCard> = () => <MyCard id={1} src='1.png' name="Bring Your Human to Work" author="Erica Keswin" duration="13" noOfReads='1.9' dots={true} progressBar='half'></MyCard>;

export const CategoryDefault: ComponentStory<typeof MyCard> = () => <MyCard id={2} src='1.png' name="Bring Your Human to Work" author="Erica Keswin" duration="13" noOfReads='1.9' button='add' progressBar='none'></MyCard>;

export const Finished: ComponentStory<typeof MyCard> = () => <MyCard id={3} src='1.png' name="Bring Your Human to Work" author="Erica Keswin" duration="13" noOfReads='1.9' progressBar='half' button='Finished'></MyCard>;

export const Read: ComponentStory<typeof MyCard> = () => <MyCard id={4} src='1.png' name="Bring Your Human to Work" author="Erica Keswin" duration="13" noOfReads='1.9'  progressBar='full' button='Read again'></MyCard>;


