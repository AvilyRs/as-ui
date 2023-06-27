import { colors } from '@as-ui/tokens';
import { getContrast } from 'polished';

function getContrastedColor(color: string) {
  const shapeDarkBackgroundTextColor = '#FFFFFF';
  const shapeLightBackgroundTextColor = '#000000';

  const result = getContrast(
    color,
    shapeLightBackgroundTextColor) < 3.5
    ? shapeDarkBackgroundTextColor
    : shapeLightBackgroundTextColor;

  return result;
}

export function ColorsGrid() {
  return Object.entries(colors).map(([ key, color ]) => (
    <div
      key={key}
      style={{
        padding: '2rem',
        backgroundColor: color
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrastedColor(color)
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
}