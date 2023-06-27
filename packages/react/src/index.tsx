import { ComponentProps } from 'react';
import { styled } from './styles';

export const Button = styled('button', {
  color: '$gray100',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '$sm',
  padding: '$2 $4',
  backgroundColor: '$ignite500',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: '$sm'
      },
      big: {
        padding: '$3 $6',
        fontSize: '$xl'
      }
    }
  }
});

export type ButtonProps = ComponentProps<typeof Button>;