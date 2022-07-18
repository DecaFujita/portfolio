import { Box } from '@mui/material';
import DarkModeSwt from '../components/switches/DarkModeSwt.component';

const Testing = props => {
    return (
        <Box sx={testing}>
            <DarkModeSwt />
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