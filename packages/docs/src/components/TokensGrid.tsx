import '../styles/tokens.grid.css';

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && (
            <th>Pixel</th>
          )}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          const remValue = Number(value.replace('rem', ''));
          const resultRemToPixel = remValue * 16;

          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{resultRemToPixel}px</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}