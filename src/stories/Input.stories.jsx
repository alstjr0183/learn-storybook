import React from 'react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    border: ''
  },
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  backgroundColor: 'white',
  border: ''
};
