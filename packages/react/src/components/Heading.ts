import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    textColor: {
      white: { color: '$white' },
      black: { color: '$black' },
      gray100: { color: '$gray100' },
      gray200: { color: '$gray200' },
      gray400: { color: '$gray400' },
      gray500: { color: '$gray500' },
      gray600: { color: '$gray600' },
      gray700: { color: '$gray700' },
      gray800: { color: '$gray800' },
      gray900: { color: '$gray900' },
      as300: { color: '$as300' },
      as500: { color: '$as500' },
      as700: { color: '$as700' },
      as900: { color: '$as900' },
    },
    
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    }
  },

  defaultVariants: {
    textColor: 'gray900',
    size: 'md'
  }
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}

Heading.displayName = 'Heading';