import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#ffffff'
        },
      ],
    }
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args}/>
);
export const Default = Template.bind({});
Default.args = { 
  currentPage: 1, 
  lastPage: 5, 
  onPageChange: (newPage) => console.log('setting page to ', newPage)
};
