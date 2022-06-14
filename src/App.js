import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import { CssBaseline,  GlobalStyles, createTheme, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { globalStyle } from './styles/styles';
import { PageProvider } from './contexts/Page.context';
import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component';
import Home from './pages/home.page';
import Portfolio from './pages/portfolio.page';
import PortfolioView from './pages/portfolioView.page';
import CV from './pages/cv.page';
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
        <PageProvider>
          <BrowserRouter>
          <Navbar switchMode={switchMode} isDarkMode={isDarkMode}/>
          <Box sx={container}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/cv' element={<CV />} />
            <Route exact path='/portfolio/monitor' element={<PortfolioView project={'monitor'}/>} />
            {/* <Route exact path='/portfolio/:id' element={<PortfolioView />} /> */}
          </Routes>
          </Box>
          <Footer />
          </BrowserRouter>
        </PageProvider>
      </ThemeProvider>
  </Fragment>
  );
}

export default App;

//STYLES
const container = theme => ({
  width: '100vw',
  height: '100%',
  background: theme.palette.background.default
})
