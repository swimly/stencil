import React from 'react';
import MCButton from '../../../dist/collection/components/mc-button/mc-button';

export default {
  title: 'Component/MCButton 按钮',
  component: MCButton,
  argTypes: {
    label: { type: 'text', description: 'The text which is shown as label' },
    name: {
      type: 'text',
      description:
        'Is needed to reference the form data after the form is submitted',
    },
    disabled: {
      type: 'boolean',
      description: 'If true, the button is displayed as disabled',
      defaultValue: { summary: false },
    },
  },
};

const defaultArgs = {
  disabled: false,
};

const Template = args => {
  return <mc-button {...args}>按钮</mc-button>;
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };