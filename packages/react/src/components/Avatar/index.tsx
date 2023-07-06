import { User } from 'phosphor-react';

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';
import { AvatarProps } from './interface';

export * from './interface';

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={0.6}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}
