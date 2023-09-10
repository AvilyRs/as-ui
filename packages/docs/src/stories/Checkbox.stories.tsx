import type { Meta, StoryObj } from '@storybook/react';
import { Box, Checkbox, CheckboxProps } from '@as-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (story) => {
      return (
        <Box>
          {story()}
        </Box>
      );
    }
  ]
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
};