import { Box } from '@mui/material';
import MobdiqIPad from '../img/MobdiqIPad.png';
import MobdiqImg1 from '../img/MonitorImg1.png';
import MobdiqImg2 from '../img/MonitorImg2.png';
// import MonitorMobile from '../img/MonitorMobile.png';
// import MonitorStyle from '../img/MonitorStyle.png';


const MobdiqPage = props => {
    return (
        <Box sx={container}>
            <Box sx={img2} />
            <Box sx={img1}>
                <Box sx={img1Content1} />
            </Box>

        </Box>
    )
}

export default MobdiqPage;


const img2 = theme => ({
    maxWidth: '100%',
    height: '35rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'red',
    backgroundImage:  `url(${MobdiqImg1})`,
    backgroundSize: 'auto 35rem', 
    backgroundRepeat: 'no-repeat'

})


const img1Content1 = theme => ({
    width: '100rem',
    height: '100%',
    backgroundImage:  `url(${MobdiqIPad})`,
    backgroundSize: 'auto 61.5rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
})

const img1 = theme => ({
    width: '100%',
    height: '65rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(0,161,224,0) 0%, rgba(0,161,224,0) 50%, rgba(0,161,224,1) 50%, rgba(0,161,224,1) 100%)',
    // background: '#00A1E0'
})

const container = theme => ({
    width: '100%',
    marginTop: '3rem',
});

