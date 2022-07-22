import { Box } from '@mui/material';
import { Fragment, useRef } from 'react';
import { Transition } from 'react-transition-group';

//colours:
const colourLight1 = '#FFDD00';
const colourLight2 = '#E0B700';
const colourDark1 = '#828282';
const colourDark2 = '#4F4F4F';

const SunnySwt = props => {
    const ref = useRef();
    return (
        <Box sx={switchBtn} onClick={props.handleChange}>
            <Transition
                in={!props.isDarkMode}
                timeout={500}
                nodeRef={ref}
            >
                {state => (
                    <Fragment>
                        <Box sx={{transform: 'translateY(-.8rem) translateX(3.7rem)'}}>
                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{...raytoAnim1[state]}} d="M2.34794 1.41065C2.34794 2.01811 2.01215 4.42343 1.59794 4.42343C1.18372 4.42343 0.847931 2.01811 0.847931 1.41065C0.847931 0.803189 1.18372 0.310745 1.59794 0.310745C2.01215 0.310745 2.34794 0.803189 2.34794 1.41065Z" fill={colourLight1}/>
                                <path style={{...raytoAnim2[state]}} d="M7.83064 3.45095C7.44017 3.91629 5.63683 5.54303 5.31952 5.27678C5.00221 5.01052 6.29109 2.9521 6.68156 2.48676C7.07203 2.02141 7.64579 1.86002 7.9631 2.12628C8.28041 2.39253 8.2211 2.9856 7.83064 3.45095Z" fill={colourLight1}/>
                                <path style={{...raytoAnim3[state]}} d="M9.59884 9.0281C8.99138 9.0281 6.58606 8.69231 6.58606 8.2781C6.58606 7.86388 8.99138 7.52809 9.59884 7.52809C10.2063 7.52809 10.6987 7.86388 10.6987 8.2781C10.6987 8.69231 10.2063 9.0281 9.59884 9.0281Z" fill={colourLight1}/>
                            </svg>
                        </Box>
                        <Box sx={{...dot, ...dotAnim[state]}}>
                            <svg style={{...luna, ...lunaAnim[state] }} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.35029 0.0255737C2.66731 1.12521 2.2729 2.4228 2.2729 3.8125C2.2729 7.78204 5.49086 11 9.4604 11C10.5482 11 11.5796 10.7583 12.5038 10.3257C11.2221 11.9542 9.23318 13 7 13C3.13401 13 0 9.86598 0 5.99999C0 3.47129 1.34082 1.25576 3.35029 0.0255737Z" fill="white"/>
                            </svg>
                        </Box>
                        <Box sx={[base, {background: props.isDarkMode ? colourDark2 : colourLight2}]}>
                        </Box>
                    </Fragment>
                )}
            </Transition>
        </Box>
    )
}

export default SunnySwt;

const base = theme => ({
    width: '4rem',
    height: '1rem',
    borderRadius: '5rem',
})

const raytoAnim1 = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)', transitionDelay: '.4s' },
    exiting: { opacity: 1},
    exited: { opacity: 0, transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)' } 
}

const raytoAnim2 = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: 'all .3s cubic-bezier(.72,.26,.53,1.43)', transitionDelay: '.6s' },
    exiting: { opacity: 1},
    exited: { opacity: 0, transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)' } 
}

const raytoAnim3 = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: 'all .3s cubic-bezier(.72,.26,.53,1.43)', transitionDelay: '.8s' },
    exiting: { opacity: 1},
    exited: { opacity: 0, transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)' } 
}

// const defaultAnim = {transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)'}


const lunaAnim = {
    entering: {transform:'translateY(.35rem) translateX(.3rem) rotate(0deg)', opacity: 1 },
    entered: { transform:'translateY(.35rem) translateX(.3rem) rotate(-60deg)', opacity: 0, transition: 'all .3s cubic-bezier(.72,.26,.53,1.43)' },
    exiting: { transform:'translateY(.35rem) translateX(.3rem) rotate(-60deg)', opacity: 0},
    exited: { transform:'translateY(.35rem) translateX(.3rem) rotate(0deg)', opacity: 1, transition: 'all .3s cubic-bezier(.72,.26,.53,1.43)'} 
}

const dotAnim = {
    entering: { transform: 'translateX(0px)', background: colourDark1 },
    entered: { transform: 'translateX(20px)', background: colourLight1,  transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)' },
    exiting: { transform: 'translateX(20px)',  background: colourLight1 },
    exited: { transform: 'translateX(0px)', background: colourDark1, transition: 'all .2s cubic-bezier(.72,.26,.53,1.43)' }
}

const luna = {
    position: 'absolute',
    transform: 'translateY(.3rem) translateX(0)'
}

const dot = {
    width: '2rem',
    height: '2rem',
    borderRadius: '5rem',
    position: 'absolute',
    left: '0',
    boxShadow: '0 0 0 4px transparent)',
    transition: 'all .2s linear',
    '&:hover': {
        boxShadow: `0 0 0 .85px ${colourLight1}`
    }
}

const switchBtn = theme => ({
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer'
})