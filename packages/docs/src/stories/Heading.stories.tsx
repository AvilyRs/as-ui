import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@as-ui/react';

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  tags: ['autodocs']
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Title',
    size: 'sm',
    textColor: 'gray900'
  }
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    size: 'sm',
    as: 'h1',
    textColor: 'gray900'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o component `Heading` sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
};