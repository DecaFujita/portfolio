import { Box } from '@mui/material';

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
    height: '50rem',
    display: 'flex',
    justifyContent: 'center'
});

const img1 = theme => ({
    width: '50rem',
    height: '100%',
    backgroundImage: 'blue',
})
const img2 = theme => ({
    width: '50rem',
    height: '100%',
    background: 'red'
})

