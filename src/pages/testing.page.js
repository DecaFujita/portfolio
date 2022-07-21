import { Box } from '@mui/material';
import DarkModeSwt from '../components/switches/DarkModeSwt.component';
import DarkModeSwt2 from '../components/switches/DarkModeSwt2.component';
import SunnySwt from '../components/switches/SunnySwt.component';

const Testing = props => {
    return (
        <Box sx={testing}>
            <SunnySwt />
        </Box>
    )
}

export default Testing;

const testing = theme => ({
    width: '100vw',
    height: '100vh',
    paddingTop: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const stroke = theme => ({
    height: '35px',
    width: '80px',
    borderRadius: '100px',
    // background: 'red',
    border: `1px solid ${theme.palette.background.default}`, 
    zIndex: 2
    
})