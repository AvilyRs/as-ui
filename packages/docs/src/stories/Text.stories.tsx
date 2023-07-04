import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Text',
  component: Text,
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {
  args: {
    children: 'Text Component',
    as: 'strong',
    size: 'md',
    textColor: 'gray900'
  }
};