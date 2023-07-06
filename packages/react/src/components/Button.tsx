import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.8
  },

  transition: 'color 0.2s, background-color 0.2s',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300'
        }
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$ignite500'
        }
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$ignite500'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },

      md: {
        padding: '0 $4',
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}