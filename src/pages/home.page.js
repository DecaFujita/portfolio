import { Box, Typography } from '@mui/material';

const Home = props => {
    return (
        <Box sx={container}>
            <Typography variant="h1" sx={{color: 'theme.palette.text.primary'}} >HELLO HOME!!!</Typography>
        </Box>
    )
};
export default Home;

//STYLES
const container = theme => ({
    marginTop: '5rem',
})

