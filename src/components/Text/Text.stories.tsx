import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps  } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url:
        '',
    },
  },
  args: {
  }
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>I am a text.</Text>;

export const Default = Template.bind({});
