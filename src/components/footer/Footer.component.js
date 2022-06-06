import { Box, Grid, Typography } from '@mui/material';
import  { SocialIcoCodePen, SocialIcoLinkedIn, SocialIcoGitHub } from '../icons/Icons';
// import IconFacebook from '../components/iconos/facebook.component';
// import IconInstagram from '../components/iconos/instagram.component';
// import IconLinkedIn from '../components/iconos/linkedin.component';
// import logoFooter from '../img/logo_hor_footer.svg';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


// const footer = theme => ({
//     background: theme.palette.secondary.light,
//     marginTop: '1.5rem',
//     padding: '3rem 5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     [theme.breakpoints.down('tablet')]: {
//         display: 'block'
//     }
// })

const Footer = props => {
    // const navigate = useNavigate();
    // const goTo = (path) => { navigate(path) }
    const theme = useTheme();

    return (
        <Box sx={footer}>
            <Box sx= {sociallinks}>
                <SocialIcoCodePen fill={theme.palette.text.primary}/>
                <SocialIcoGitHub fill={theme.palette.text.primary}/>
                <SocialIcoLinkedIn fill={theme.palette.text.primary}/>
            </Box>
        </Box>
    )
}
export default Footer;

const footer = theme => ({
    width: '100%',
    height: '5rem',
    padding: '0 3rem 0 3rem',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}) 

const sociallinks = theme => ({
    width: '20rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
}) 