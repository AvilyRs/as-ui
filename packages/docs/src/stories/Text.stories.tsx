import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Custom Text',
    as: 'strong',
    size: 'md',
    textColor: 'gray100'
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      );
    }
  ]
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};