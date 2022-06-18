import { Box } from '@mui/material';
import MonitorBackground from '../img/MonitorBackground.png';
import MonitorDesk from '../img/MonitorDesk.png';
import MonitorMobile from '../img/MonitorMobile.png';
import MonitorStyle from '../img/MonitorStyle.png';


const MonitorPage = props => {
    return (
        <Box sx={container}>
            <Box sx={img1} />
            <Box sx={img2} />
        </Box>
    )
}

export default MonitorPage;

const container = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center'
});

const img1 = theme => ({
    width: '50rem',
    height: '50rem',
    backgroundImage: 'blue',
})
const img2 = theme => ({
    width: '50rem',
    height: '50rem',
    background: 'red'
})

