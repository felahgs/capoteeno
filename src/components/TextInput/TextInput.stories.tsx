import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './TextInput';


export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
} as ComponentMeta<typeof TextInput>;

const Default: ComponentStory<typeof TextInput> = (args) => 
  <TextInput {...args} />;

const Search: ComponentStory<typeof TextInput.Search> = (args) => 
  <TextInput.Search {...args} />;

export const InputDefault = Default.bind({});
InputDefault.args = {
  placeholder: 'Texto de placeholder vai aqui!',
  onChange: (value) => console.log('onChange returning', value)
};

export const InputSearch = Search.bind({});
InputSearch.args = {
  placeholder: 'Procurando por algo específico?',
  onChange: (value) => console.log('onChange returning', value),
  onSearch: (value) => console.log('onSearch returning', value),
};
