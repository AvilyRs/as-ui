import type { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, HeadingProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom Title',
    size: 'sm',
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
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Title',
  }
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o component `Heading` sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
};