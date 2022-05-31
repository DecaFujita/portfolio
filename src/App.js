import Navbar from './components/navbar/Navbar.component';
import Footer from './components/footer/Footer.component';
import { ThemeProvider } from '@mui/material/styles';
import theme from './contexts/Theme.context';
import { CssBaseline,  GlobalStyles } from '@mui/material';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home.page';
import { globalStyle } from './styles/styles';
import { PortfolioProvider } from './contexts/Portfolio.context';

const App = () => {
  return (
  <Fragment>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyle} />
    <PortfolioProvider>
      <BrowserRouter>
      <Navbar/>
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
