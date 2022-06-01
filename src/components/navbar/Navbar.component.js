import { Box } from '@mui/material';
// import navLogo  from '../../img/logo_hor.svg';
import { useState, useEffect, useRef, useContext} from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Sandwich from './Sandwich.component';
import { PortfolioContext } from '../../contexts/Portfolio.context';
import SwitchMode from '../switch/SwitchMode.component';
import { useTheme } from '@emotion/react';

const Navbar = props => {
    const scrollRef = useRef(false);
    const [ scrollTop, setScrollTop ] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path) }
    const  { isOpen, setIsOpen, width } = useContext(PortfolioContext);
    const theme = useTheme();

    // Open-close sandwich menu
    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    // Map scrolling
    useEffect(() => {
        try {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } catch (error) {
            // fallback for older browsers
            window.scrollTo(0, 0);
          }
      }, [])
      
    // Show navbar background on scroll down
    useEffect(() => {
      const onScroll = () => {
        let currentPosition = window.pageYOffset; // document.documentElement.scrollTop;
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Hide navbar background on scroll up
    useEffect(() => {
      if (scrollTop >= 100) { scrollRef.current = true }
      else { scrollRef.current = false }
    }, [scrollTop])
   
    return (
      <Box sx={[navbar, {background: scrollRef.current || width  < 700 ? 'white' : '', transition: 'background .2s linear'}]}>
        <Box sx={navlogo} onClick={() => goTo('/')} />
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
        {/* <SwitchMode handleChange={props.switchMode} theme={} /> */}
          { width < 900 // tablet
            ? 
              <Sandwich handleClick={handleClick} isOpen={isOpen} />
            :
            <Box sx={menu}>
              <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive && activeColor })} href='/'>Home</NavLink>
              <NavLink exact='true' to='/portfolio' style={({isActive}) => ({color: isActive && activeColor })}  href='/portfolio.html'>Portfolio</NavLink>
              <NavLink exact='true' to='/cv' style={({isActive}) => ({color: isActive && activeColor })}  href='/cv'>Curriculum</NavLink>
            </Box>
          }
        </Box>
      </Box>
    )
};


//STYLES

const activeColor = 'red'; //NavLink active colour

const navbar = theme => ({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.greys.two}`
})

const navlogo = theme => ({
    width: '15rem',
    marginLeft: '5rem',
    height: '10rem',
    // background: `url(${navLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // [theme.breakpoints.down('laptop')]: { // change it to mobile later! 
    //   width: '20rem',
    //   marginLeft: '2rem', 
    // }, 
})

const menu = theme => ({
    width: '300px',
    display: 'flex',
    marginRight: '50px',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontFamily: 'Raleway',
    fontWeight: '700',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    '& a': {
        textDecoration: 'none',
        cursos: 'pointer',
        borderBottom: '1px solid transparent',
        transition: 'border .5s linear'
    },
    '& a:link, a:visited': {
        color: theme.palette.primary
    },
    '& a:hover': {
      borderBottom: `1.5px solid ${theme.palette.primary.main}`,
      // color: theme.palette.primary.light
    }
})

export default Navbar;
