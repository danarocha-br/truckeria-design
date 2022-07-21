import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Stepper, StepperProps } from '.';
import { Box } from '../Box';

const steps = [
  {
    label: 'Basic info',
    to: '/',
  },
  {
    label: 'Contact info',
    to: '/',
    isActive: true,
  },
  {
    label: 'Some other info',
    to: '/',
  },
];

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    steps: steps,
  },
} as Meta;

const Template: Story<StepperProps> = args => (
  <Box css={{ w: 400 }}>
    <Stepper {...args} />
  </Box>
);

export const Primary = Template.bind({});
