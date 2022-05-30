import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
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
                    <Box sx={menuBox}>
                        <Box red={ref} id='menu' sx={[menu, {...menuItemAnim[state],}]}>
                            <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/home'>Home</NavLink>
                            <NavLink exact='true' to='/portfolio'  style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/portafolio.html'>Portafolio</NavLink>
                            <NavLink exact='true' to='/cv'  style={({isActive}) => ({color: isActive ? '#1EB5D7' : ''})} href='/nosotros'>Nosotros</NavLink>
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
    exiting:  {opacity:1, transform: 'translateY(0px)', transition: 'all .3s linear'  },
    exited:  {opacity:0, transform: 'translateY(-40px)', transition: 'all .3s linear' },
  }

const sandwich = theme => ({
    display: 'flex',
    width:'5rem',
    height: '5.3rem',
    marginRight: '2rem',
    padding: '1.6rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '-10',
})

const sandwichTab = theme => ({
    height: '.25rem',
    width: '2.5rem',
    borderRadius: '1rem',
    background: theme.palette.secondary.main ,
    transition: 'all .2s linear',
})

const menuBox = theme => ({
    position: 'absolute',
    left: '0',
    width: '100%',
    overflow: 'hidden'
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