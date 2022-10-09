import { LightTheme } from 'baseui';

import Typography from './Typography';

const Theme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    modalShadow: 'rgba(16, 36, 94, 0.2)',
  },
  typography: {
    ...LightTheme.typography,
    ...Typography,
  },
};

export default Theme;
