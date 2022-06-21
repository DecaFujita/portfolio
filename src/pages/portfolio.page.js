import { Link, Box, Typography } from "@mui/material";
import { SocialIcoCodePen } from '../components/icons/Icons';
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import ImgMonitor from '../img/portfolio-monitor-01.jpg';
import ImgKlauben from '../img/portfolio-klauben-01.jpg';
import ImgCruzada from '../img/portfolio-cruzada-01.jpg';
import ImgRetailOne from '../img/portfolio-retailone-01.jpg';
import ImgMobdiqOne from '../img/portfolio-mobdiq-01.jpg';
import ImgWrapioca from '../img/portfolio-wrapioca-01.jpg';
import ImgEstarBien from '../img/portfolio-estarbien-01.jpg';

const Portfolio = props => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Box sx={container}>
            <Box sx={content}>
                <Box sx={pic1} onClick={() => navigate(`/portfolio/1`)} />
                <Box sx={pic2} onClick={() => navigate(`/portfolio/2`)} />
                <Box sx={pic3} onClick={() => navigate(`/portfolio/3`)} />
                <Box sx={pic4} onClick={() => navigate(`/portfolio/4`)} />
                <Box sx={pic5} onClick={() => navigate(`/portfolio/5`)} />
                <Box sx={pic6} onClick={() => navigate(`/portfolio/6`)} />
                <Box sx={pic7} onClick={() => navigate(`/portfolio/`)} />
            </Box>
            <Box sx={link}>
                <Typography variant='h5' sx={linkText}>More? Check out my</Typography>
                <SocialIcoCodePen fill={theme.palette.text.primary}/>
            </Box>
            
        </Box>
    )
};

export default Portfolio;

const link = theme => ({
    height: '5rem',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2rem 0',

})

const linkText = theme => ({
    color: theme.palette.text.primary,
    fontWeight: '700',
    marginRight: '1rem'
})

const pic1 = theme => ({
    gridColumn: '1/2',
    gridRow: '1/3',
    backgroundImage: `url(${ImgMonitor})`,
    backgroundSize: 'cover',
})

const pic2 = theme => ({
    gridColumn: '2/3',
    gridRow: '1/2',
    backgroundImage: `url(${ImgMobdiqOne})`,
    backgroundSize: 'cover'
})

const pic3 = theme => ({
    gridColumn: '3/4',
    gridRow: '1/2',
    backgroundImage: `url(${ImgEstarBien})`,
    backgroundSize: 'cover'
})

const pic4 = theme => ({
    gridColumn: '2/4',
    gridRow: '2/3',
    backgroundImage: `url(${ImgKlauben})`,
    backgroundSize: 'cover'
})

const pic5 = theme => ({
    gridColumn: '1/2',
    gridRow: '3/4',
    backgroundImage: `url(${ImgCruzada})`,
    backgroundSize: 'cover'
})  
const pic6 = theme => ({
    gridColumn: '2/3',
    gridRow: '3/4',
    backgroundImage: `url(${ImgWrapioca})`,
    backgroundSize: 'cover'
})  
const pic7 = theme => ({
    gridColumn: '3/4',
    gridRow: '3/4',
    backgroundImage: `url(${ImgRetailOne})`,
    backgroundSize: 'cover'
})  

const content = theme => ({
    width: '100rem',
    // margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '32rem 32rem 32rem',
    gridTemplateRows: '32rem 32rem 32rem',
    gridGap: '2rem',
    cursor: 'pointer'
})

const container = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10rem'
})