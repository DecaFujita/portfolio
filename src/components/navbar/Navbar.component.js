import { Box, Button } from '@mui/material';
// import navLogoNeg  from '../../img/navLogo-neg.svg';
import { NavLogo, NavLogoNeg } from '../navbar/NavLogo';
import { useState, useEffect, useRef, useContext} from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Sandwich from './Sandwich.component';
import { PortfolioContext } from '../../contexts/Portfolio.context';
import SwitchMode from '../switch/SwitchMode.component';
import { useTheme } from '@mui/material/styles'

const Navbar = props => {
    const scrollRef = useRef(false);
    const [ scrollTop, setScrollTop ] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path) }
    const  { isOpen, setIsOpen, width } = useContext(PortfolioContext);

    // Open-close sandwich menu
    const handleClick = () => { setIsOpen(!isOpen) }
    const activeColor = useTheme().palette.primary.main;
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
    // Transparent navbar that turns white on scroll
    // <Box sx={[navbar, {background: scrollRef.current || width  < 700 ? 'white' : '', transition: 'background .2s linear'}]}> 
      <Box sx={navbar}>
        <Box sx={navlogo}>
          {props.isDarkMode ? 
            <NavLogoNeg onClick={() => goTo('/')} />
          :
            <NavLogo onClick={() => goTo('/')} />
          }
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <SwitchMode handleChange={props.switchMode}/>
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
const navbar = theme => ({
    position: 'fixed',
    top: 0,
    paddingLeft: '3rem',
    paddingRight: '3rem',
    width: '100%',
    height: '5rem',
    background: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`
})

const navlogo = theme => ({
    height: '80%',
    display: 'flex',
    alignItems: 'center'
    // [theme.breakpoints.down('laptop')]: { // change it to mobile later! 
    //   width: '20rem',
    //   marginLeft: '2rem', 
    // }, 
})

const menu = theme => ({
    width: '300px',
    display: 'flex',
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
        color: theme.palette.text.secondary
    },
    '& a:hover': {
      borderBottom: `1.5px solid ${theme.palette.primary.main}`,
      // color: theme.palette.primary.light
    }
})

export default Navbar;
