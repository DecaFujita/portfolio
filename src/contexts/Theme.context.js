import { green } from '@mui/material/colors';

const getDesignTokens = (mode) =>({
  palette: {
    mode,
    primary: {
      light: green[500],
      main: green[600],
      dark: green[700],
      // ...(mode === 'dark' && {
      //   light: amber[200],
      //   main: amber[300],
      //   dark: amber[400],
      // }),
    },
    secondary: {
      light: '#474747',
      main: '#272727',
      dark: '#191919'
    },
    greys: {
      one: '#474747',
      two: '#272727',
      three: '#191919'
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
      ...(mode === 'dark' && {
        default: '#303030',
        paper: '#424242',
      }),
    },
    // text: {
    //   primary: 'rgba(0,0,0,0.87)',
    //   secondary: 'rgba(0,0,0,0.54)',
    //   disabled: 'rgba(0,0,0,0.38)',
    //   hint: 'rgba(0,0,0,0.38)',
    //   ...(mode === 'dark' && {
    //     primary: '#ffffff',
    //     secondary: 'rgba(0,0,0,0.53)',
    //     disabled: 'rgba(0,0,0,0.37)',
    //     hint: 'rgba(0,0,0,0.37)',
    //   })
    // },
  },
  breakpoints: {
    values: {
      mobile: 500,
      tablet: 700,
      laptop: 900,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: { fontSize: '9.6rem', fontWeight:'700' }, //96
    h2: { fontSize: '6rem' }, //60
    h3: { fontSize: '4.8rem', fontWeight: '300' }, //48
    h4: { fontSize: '3.2rem',  fontWeight: '600' }, //32
    h5: { fontSize: '2.4rem' }, //24
    h6: { fontSize: '1.9rem' }, //19
    body1: { fontSize: '1.6rem' }, //16
    body2: { fontSize: '1.4rem' }, //14
  },
});

export default getDesignTokens; 