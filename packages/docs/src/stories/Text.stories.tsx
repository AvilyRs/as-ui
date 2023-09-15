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
  argTypes: {
    textColor: {
      options: ['white', 'black', 'gray100', 'gray200', 'gray400', 'gray500', 'gray600', 'gray700', 'gray800', 'gray900', 'ignite300', 'ignite500', 'ignite700', 'ignite900'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    }
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