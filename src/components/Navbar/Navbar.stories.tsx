import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Navbar';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}/>
);
export const Default = Template.bind({});
Default.args = { logo: 'capputeeno', cartItems: 5 };
