import { Box } from '@mui/material';

import Klauben1 from '../img/Klauben1.png';
import Klauben2 from '../img/Klauben2.png';
import Klauben3 from '../img/Klauben3.jpg';
import Klauben4 from '../img/Klauben4.jpg';


const KlaubenPage = props => {
    return (
        <Box sx={container}>
            <Box sx={img1} />
            <Box sx={img2} />
            <Box sx={img3} />
            <Box sx={img4} />
        </Box>
    )
}

export default KlaubenPage;

const img1 = theme => ({
    width: '100rem',
    height: '54rem',
    margin: '0 auto',
    backgroundImage: `url(${Klauben3})`,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center'
})

const img2 = theme => ({
    width: '100rem',
    height: '54rem',
    margin: '0 auto',
    marginTop: '1.5rem',
    backgroundImage: `url(${Klauben4})`,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center'
})

const img3 = theme => ({
    width: '100rem',
    height: '65.8rem',
    margin: '0 auto',
    marginTop: '1.5rem',
    backgroundImage: `url(${Klauben1})`,
    backgroundSize: '100% auto'
})

const img4 = theme => ({
    width: '100rem',
    height: '91.3rem',
    margin: '0 auto',
    marginTop: '1.5rem',
    backgroundImage: `url(${Klauben2})`,
    backgroundSize: '100% auto'
})

const container = theme => ({
    width: '100%',
    marginTop: '3rem',
    paddingBottom: '5rem'
});

