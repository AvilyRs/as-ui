import type { Meta, StoryObj } from '@storybook/react';
import { Box, TextArea, TextAreaProps } from '@as-ui/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
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
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Text Content'
  }
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Text Content'
  }
};