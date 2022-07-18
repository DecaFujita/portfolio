import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';

const Sandwich = props => {
    const ref = useRef(null);
  
    return (
        <Box onClick={props.handleClick}>
            <Box sx={sandwich}>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(45deg) translateY(5px) translateX(5.5px)'}]}/>
                <Box sx={[sandwichTab, { opacity: props.isOpen && '0'}]}/>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(-45deg) translateY(-5px) translateX(5.5px)'}]}/>
            </Box>
            <Transition
                in={props.isOpen}
                timeout={{enter: 300, exit: 100}}
                nodeRef={ref}
                mountOnEnter
                // unmountOnExit
            >
                {state => (
                    <Box sx={[menuBox, {...menuAnim[state]}]}>
                        <Box red={ref} id='menu' sx={[menu]}>
                            <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive && '#1EB5D7'})} href='/home'>Home</NavLink>
                            <NavLink exact='true' to='/portfolio'  style={({isActive}) => ({color: isActive && '#1EB5D7'})} href='/portafolio.html'>Portafolio</NavLink>
                            <NavLink exact='true' to='/cv'  style={({isActive}) => ({color: isActive && '#1EB5D7'})} href='/cv'>Nosotros</NavLink>
                        </Box>
                    </Box>  
                )}
            </Transition>
        </Box>
    )
}


//STYLES
const menuItemAnim = {
    entering: {opacity:0, transform: 'translateY(-40px)'},
    entered: {opacity:1, transform: 'translateY(0px)', transition: 'all .3s linear'},
    exiting: {opacity:1, transform: 'translateY(0px)', transition: 'all .3s linear'  },
    exited: {opacity:0, transform: 'translateY(-40px)', transition: 'all .3s linear' },
  }

  const menuAnim = {
    entering: { transform: 'translateX(100vw)' },
    entered: { transform: 'translateX(0rem)', transition: 'all .5s linear' },
    exiting: { transform: 'translateX(0rem)' },
    exited: { transform: 'translateX(100vw)', transition: 'all .5s linear' },
  }

const sandwich = theme => ({
    display: 'flex',
    height: '5.3rem',
    padding: '1.6rem 0',
    marginLeft: '1rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '-10',
})

const sandwichTab = theme => ({
    height: '.25rem',
    width: '2.5rem',
    borderRadius: '1rem',
    background: theme.palette.text.secondary,
    transition: 'all .2s linear',
})

const menuBox = theme => ({
    position: 'absolute',
    right: '0',
    top: '5rem',
    [theme.breakpoints.down('mobile')]: {
        top: '7rem'
    },
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: theme.palette.primary.main,
})

const menu = theme => ({
    width: '100%',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '2rem',
    transition: 'all .2s linear',
    '& a': {
        textDecoration: 'none'
    },
    '& a:link, a:visited': {
        color: theme.palette.secondary.main
    }
})



export default Sandwich;