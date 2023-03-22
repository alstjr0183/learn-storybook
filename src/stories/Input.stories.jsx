import React from 'react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    title: '',
    options: []
  },
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: 'Price',
  options: ['USA', 'CAD', 'EUR']
};
