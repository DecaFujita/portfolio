import { amber, purple, deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode) =>({
  palette: {
    mode,
    primary: {
      ...purple,
      ...(mode === 'dark' && {
        light: amber[200],
        main: amber[300],
        dark: amber[400],
      }),
    },
    secondary: {
      ...deepOrange,
    },
    greys: {
      one: '#F5F5F4',
      two: '#E2E0DF',
      three: '#CFCFC9'
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
    //   primary: purple[900],
    //   secondary: grey[800],
    //   ...(mode === 'dark' && {
    //     primary: '#fff',
    //     secondary: grey[500],
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
    h1: { fontSize: '9.6rem', fontWeight:'700' }, //96
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