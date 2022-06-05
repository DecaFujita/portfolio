import { Box, Button, Typography, Link } from '@mui/material';
import { Fragment } from 'react';
import { ChevronDown } from '../components/icons/Icons';
import aboutPic from '../img/decafujita.jpg';

const Home = props => {
    return (
        <Box sx={container}>
            <Box sx={intro}>
                <Box sx={aSide}>
                    <Box sx={bubble}>
                        <Box sx={bubbleText}>
                            <Typography variant='h2' sx={text1}>Hello!<br></br> I'm</Typography>
                            <Typography variant='h1' sx={text2}>deca<br></br>fujita</Typography>
                        </Box>
                    </Box>
                    <Box sx={tail} />
                </Box>
                <Box sx={bSide}>
                    <Typography variant='h4' sx={text3}>designer <Typography variant='body1' sx={[textColor, {display: 'inline-block'}]}>and</Typography> &lt;coder/&gt;</Typography>
                    <Box  sx={{width: '7rem', transform: 'translateY(12rem)'}} >
                        <ChevronDown />
                    </Box>
                </Box>
            </Box>
            <Box sx={about}>
                <Box sx={content}>
                    <Box sx={contentASide}>
                        <Box sx={contentASideText}>
                            <Typography variant='h3' sx={textColor}>About me</Typography>
                            <Box>
                                <Typography variant='body1' sx={textColor}> I’m a Brazilian Graphic, UI/UX designer and a front end developer. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                    quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis
                                </Typography>
                                <Box sx={contentButtons}>
                                    <Link href='#' variant='body1' underline="hover" sx={link}>Portfolio</Link>
                                    <Link href='#' variant='body1' underline="hover" sx={link}>Curriculum</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={contentBSide}>
                        <Box sx={contentBubble}>
                            <Typography variant='h4'>designer</Typography>
                            <Typography variant='body1' sx={{margin: '.5rem 0 3rem 2.5rem'}}>
                                    Branding<br></br>
                                    Packaging<br></br>
                                    Graphic<br></br>
                                    UI/UX
                            </Typography>
                            <Typography variant='h4'> &lt;coder/&gt;</Typography>
                            <Typography variant='body1' sx={{margin: '.5rem 0 0 2.5rem'}}>
                                    HTML<br></br>
                                    CSS / SCSS<br></br>
                                    JS / React<br></br>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={tail2} />
            </Box>
        </Box>
    )
};
export default Home;

//STYLES
const textColor = theme => ({color: theme.palette.text.primary })
const text1 = theme => ({ color: 'white', lineHeight: '6.5rem' })
const text2 = theme => ({ color: theme.palette.secondary.main, lineHeight: '9.5rem' })
const text3 = theme => ({ color: theme.palette.primary.main })
const link = theme => ({ marginRight: '2rem'})
// const text4 = theme => ({ display: 'inline-block'})

// STYLES for About me (section2)

const contentASide = theme => ({
    width: '50%',
    paddingRight: '5rem',
    display: 'flex',
    justifyContent: 'flex-end'
})

const contentASideText = theme => ({
    width: '45rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

const contentBSide = theme => ({
    width: '50%',
    borderRadius: '5rem 0 0 0',
    backgroundImage: `url(${aboutPic})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
})
const contentBubble = theme => ({
    background: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    marginLeft: '20rem',
    borderRadius: '5rem 0 0 0',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

const contentButtons = theme => ({})

const content = theme => ({
    width: '100%',
    height: '45rem',
    margin: '0 auto',
    display: 'flex'
})
 
const about = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    background: theme.palette.background.default,
    paddingTop: '10rem'

})

// STYLES for Home Introduction (section1)
const bubbleText = theme => ({ display: 'flex', flexDirection: 'column' })

const bubble = theme => ({
    width: '100%',
    height: '47rem',
    background: theme.palette.primary.main,
    borderRadius: '0 7rem 0 0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '5rem',
})

const tail = theme => ({
    width: '7rem',
    height: '7rem',
    background:`linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)`
})

const tail2 = theme => ({
    width: '7rem',
    height: '7rem',
    background:`linear-gradient(-135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)`
})

const aSide = theme => ({
    width: '50%',
    paddingRight: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

const bSide = theme => ({ 
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})
 
const intro = theme => ({
    width: '100%',
    height: '100%',
    display: 'flex'
})

const container = theme => ({
    paddingTop: '5rem',
    width: '100%',
    height: '100%'
})

