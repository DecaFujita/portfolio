import { amber, purple, deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode) =>({
  palette: {
    mode,
    primary: {
      ...purple,
      ...(mode === 'dark' && {
        light: grey[300],
        main: amber[300],

      }),
    },
    greys: {
      one: '#F5F5F4',
      two: '#E2E0DF',
      three: '#CFCFC9'
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),


    },
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
    h1: { fontSize: '9.6rem' }, //96
    h2: { fontSize: '6rem' }, //60
    h3: { fontSize: '4.8rem', fontWeight: '300' }, //48
    h4: { fontSize: '3.2rem' }, //32
    h5: { fontSize: '2.4rem' }, //24
    h6: { fontSize: '1.9rem' }, //19
    body1: { fontSize: '1.6rem' }, //16
    body2: { fontSize: '1.4rem' }, //16
  },
});




export default getDesignTokens; 