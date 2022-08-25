import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <div
      style={{ width: '100px', height: '30px', border: '1px solid black' }}
    ></div>
  </Badge>
);
export const Default = Template.bind({});
Default.args = {
  color: 'red',
  value: 2,
};
