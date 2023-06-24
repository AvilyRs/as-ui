import { colors } from '@as-ui/tokens';
import { styled } from './styles';

const Button = styled('button', {
  color: '$gray100',
  backgroundColor: '$ignite500'
});

export function App() {
  return (
    <main>
      <h1 style={{ color: colors.ignite500 }}>Hey there</h1>
      <Button>Meu Botão</Button>
    </main>
  );
}