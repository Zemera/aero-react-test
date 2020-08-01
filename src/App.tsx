import React from 'react';
import { Provider } from 'react-redux';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import Routes from 'routes';
import 'translations';
import config from './config';

import Auth from 'routes/Auth';
import 'styles/index.scss';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

const App = () => {
  useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <React.Fragment>
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              {/* <Auth> */}
              <CssBaseline />
              {/* <ScrollReset /> */}
              <Routes />
              {/* {config.env === 'DEV' && <MockedButton />} */}
              {/*  </Auth> */}
            </SnackbarProvider>
          </React.Fragment>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
