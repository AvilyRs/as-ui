import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@as-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <Text
        textColor='gray100'
        as='strong'
      >
        Box Component
      </Text>
    )
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {}
};