// import { Fragment } from "react";
import { Box } from '@mui/material';
// import SectionCarousel from '../sections/Carousel.section';
// import SectionGallery from '../sections/Gallery.section';
// import { containerStyle } from '../styles/styles'


const Home = props => {
    return (
        <Box sx={container}>
            HELLO HOME!!!
        </Box>
    )
};

//STYLES

const container = theme => ({
    marginTop: '5rem',
    background: theme.palette.background.default,
})

export default Home;