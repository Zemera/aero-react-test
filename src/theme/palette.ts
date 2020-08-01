import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#3e8bdc',
    main: '#0284c6',
    light: '#3e8bdc'
  },
  secondary: {
    contrastText: white,
    dark: '#7e7e7e',
    main: '#bfbfbf',
    light: '#f8f8f8'
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#262626',
    secondary: '#9b9b9b',
    link: colors.blue[600],
    dark: '#000000',
    subtitle: '#999999',
    blueLight: '#CDD8E4',
    orange: '#FFA06A',
    violet: '#B44FE3'
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#ffffff',
    paper: white
  },
  divider: colors.grey[200]
};
