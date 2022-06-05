import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import { CssBaseline,  GlobalStyles, createTheme, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { globalStyle } from './styles/styles';
import { PortfolioProvider } from './contexts/Portfolio.context';
import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component';
import Home from './pages/home.page';
import getDesignTokens from './contexts/Theme.context'

import './App.css';

const App = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(true)
  const switchMode = props => (setIsDarkMode(!isDarkMode))
  const theme = createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light'));

  return (
  <Fragment>
    <CssBaseline/>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyle} />
        <PortfolioProvider>
          <BrowserRouter>
          <Navbar switchMode={switchMode} isDarkMode={isDarkMode}/>
          <Box sx={container}>
          <Routes>
            
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/nosotros' element={<Curriculum />} />
            <Route exact path='/portfolio/:id' element={<PortafolioView />} /> */}
            
          </Routes>
          </Box>
          <Footer isDarkMode={isDarkMode}/>
          </BrowserRouter>
        </PortfolioProvider>
      </ThemeProvider>
  </Fragment>
  );
}

export default App;

//STYLES


const container = theme => ({
  height: '100vh',
  width: '100vw',
  background: theme.palette.background.default
})
