import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Box Container</span>
      </>
    )
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {}
};