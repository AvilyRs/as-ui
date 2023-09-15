import type { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, HeadingProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom Title',
    size: 'md',
    textColor: 'gray100'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
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