import { DarkTheme } from 'baseui';

import Typography from './Typography';

const Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    accent: '#2F94FF',
    negative: '#D91E36',
    warning: '#F9C03A',
    positive: '#23BF9A',
    menuBackground: '#1C232D',
    menuFill: 'rgb(43, 48, 58)',
    menuFillHover: 'rgb(54, 61, 74)',
    menuFontDefault: '#c5cede',
    menuFontHighlighted: '#ffffff',
    menuFontSelected: '#ffffff',
    buttonPrimaryFill: 'rgb(43, 48, 58)',
    buttonPrimaryHover: 'rgb(54, 61, 74)',
    containerBackground: '#080D14',
    tableHeader: '#97A0C0',
    inputBorder: '#97A0C0',
    buttonBorder: '#1235b2',
    buttonBorderDisabled: '#424963',
    buttonTextDisabled: '#97A0C0',
    assignedOrderPin: '#C3C7EF',
    unassignedOrderPin: '#F9C03A',
    modalBackground: '#97A0C070',
    modalShadow: '#555555',
  },
  typography: {
    ...DarkTheme.typography,
    ...Typography,
  },
};

export default Theme;
