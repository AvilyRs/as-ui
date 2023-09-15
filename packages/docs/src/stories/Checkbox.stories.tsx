import type { Meta, StoryObj } from '@storybook/react';
import { Box, Checkbox, CheckboxProps, Text } from '@as-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (story) => {
      return (
        <Box css={{ display: 'flex', gap: '1rem' }}>
          {story()} <Text textColor='gray100'>Accept terms</Text>
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