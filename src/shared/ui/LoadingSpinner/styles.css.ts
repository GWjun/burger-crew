import { style } from '@vanilla-extract/css';
import { theme } from '#shared/lib/styles/theme.css';
import { rotate } from '#shared/lib/styles/animation.css';

export const spinnerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const insetVariant = style({
  width: '100%',
  height: '100%',
});

export const spinnerIcon = style({
  height: '1rem',
  width: '1rem',
  animation: `${rotate} 1s linear infinite`,
  color: theme.colors.gray_400,
});
