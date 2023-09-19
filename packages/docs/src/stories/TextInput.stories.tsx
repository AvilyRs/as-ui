import type { Meta, StoryObj } from '@storybook/react';
import { Box, TextInput, TextInputProps } from '@as-ui/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
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
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  }
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    prefix: 'cal.com/',
    placeholder: 'Type your name'
  }
};