import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component';
import { ThemeProvider } from '@mui/material/styles';
import { theme, lightTheme, darkTheme } from './contexts/Theme.context';
import { CssBaseline,  GlobalStyles } from '@mui/material';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home.page';
import { globalStyle } from './styles/styles';
import { PortfolioProvider } from './contexts/Portfolio.context';
import { useState } from 'react';
import { createTheme } from '@mui/system';
import getDesignTokens from './contexts/Theme.context';

const App = () => {

  const [ isDarkMode, setIsDarkMode ] = useState(true)

  const switchMode = props => (setIsDarkMode(!isDarkMode))


  const darkModeTheme = createTheme(getDesignTokens('dark'));
  const lightModeTheme = createTheme(getDesignTokens('light'));



  return (
  <Fragment>
    <CssBaseline/>
      <ThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
        <GlobalStyles styles={globalStyle} />
        <PortfolioProvider>
          <BrowserRouter>
          <Navbar switchMode = {switchMode} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/nosotros' element={<Curriculum />} />
            <Route exact path='/portfolio/:id' element={<PortafolioView />} /> */}
          </Routes>
          <Footer />
          </BrowserRouter>
          
        </PortfolioProvider>
      </ThemeProvider>
  </Fragment>
  );
}

export default App;
