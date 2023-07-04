import { ComponentProps } from 'react';

import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',
  backgroundColor: '$gray800'
});

export type BoxProps = ComponentProps<typeof Box>