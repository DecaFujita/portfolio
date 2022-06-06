import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { 
    SocialIcoCodePen, 
    SocialIcoLinkedIn, 
    SocialIcoGitHub, 
    SocialIcoInsta,
    SocialIcoMessenger,
    EmailIco,
    PinIco,
} from '../components/icons/Icons';

const CV = props => {
    const theme = useTheme();
    return (
        <Box sx={container}>
            <Box sx={aSide}>
                <Box sx={aContent}>
                <Typography variant='h4' mb={1}>Deca Fujita</Typography>
                <Typography variant='body1' sx={{fontWeight: '600'}}>
                    Visual Designer<br/>
                    Front end developer
                </Typography>
                <Box sx={personalInfo} mt={4}>
                    <Typography variant='body1' mr={1}>
                        Santiago - Chile
                    </Typography>
                    <PinIco fill={theme.palette.secondary.main}/>
                </Box>
                </Box>
            </Box>
            <Box sx={bSide}>
                <Box sx={bContent}>
                    <Typography variant='h3'>Curriculum</Typography>
                    <Typography variant='body1' mt={5} mb={5}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, facilisi.
                    </Typography>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} />
                    {/* WORK EXPERIENCE */}
                    <Box sx={session}  mt={5}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Work experience
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body2'>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Creative Director 
                                </Typography>
                                Packaging Brands (Santiago - Chile) <br/>
                                2017 - present
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Creative Design Manager
                                </Typography>
                                Packaging Brands (Santiago - Chile)<br/>
                                2015 - 2017
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Creative Design Manager
                                </Typography>
                                Packaging Brands (Rio de Janeiro - Brazil)<br/>
                                2014 - 2015
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Designer
                                </Typography>
                                Packaging Brand (Rio de Janeiro - Brazil)<br/>
                                2013 - 2014
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Creative Design Manager
                                </Typography>
                                Packaging Brands (Rio de Janeiro - Brazil)<br/>
                                2009 - 2012
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Designer
                                </Typography>
                                Packaging Brands (Rio de Janeiro - Brazil)<br/>
                                2007 - 2009
                                <br/><br/>

                                <Typography variant='body1' sx={sessionSubTitle}>
                                Designer
                                </Typography>
                                Spice Design (São Paulo - Brazil)<br/>
                                2003 - 2007
                                <br/><br/><br/>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} />
                    {/* EDUCATION    */}
                    <Box sx={session}  mt={5}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Education
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body2'>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Goldsmiths, Univertisty of London
                                </Typography>                                
                                Master of Arts (MA), Brands, Communication <br/>
                                and Culture (Promotional Media) <br/>
                                2012 - 2013
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Universidade Federal do Rio de Janeiro
                                </Typography>
                                Bachelor’s degree, Design <br/>
                                1999 - 2003
                                <br/><br/><br/>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} /> 
                    {/* CERTIFICATION */}
                    <Box sx={session}  mt={5}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Certification
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body2'>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                CS50’s Web Programming with Python and Java Script
                                </Typography>                                
                                Harvard - edX<br/>
                                2021
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                CS50’s Introduction to Computer Science
                                </Typography>
                                Harvard - edX<br/>
                                2020
                                <br/><br/><br/>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} /> 
                    {/* LANGUAGES */}
                    <Box sx={session}  mt={5}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Languages
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body2'>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Portuguese
                                </Typography>                                
                                Mother tongue
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Spanish
                                </Typography>
                                Fluent
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                English
                                </Typography>
                                Fluent
                                <br/><br/><br/>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} /> 
                    {/* INTERESTS */}
                    <Box sx={session}  mt={5}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Interests
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body2'>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Portuguese
                                </Typography>                                
                                Mother tongue
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                Spanish
                                </Typography>
                                Fluent
                                <br/><br/>
                                <Typography variant='body1' sx={sessionSubTitle}>
                                English
                                </Typography>
                                Fluent
                                <br/><br/><br/>
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={{borderTop: `.2px solid ${theme.palette.text.primary}`}} /> 
                </Box>
            </Box>
        </Box>
    )
}

export default CV;

//STYLES

const personalInfo = theme => ({
    display: 'flex',
    justifyContent: 'flex-end',
    height: '2.5rem'

})
const sessionTitle = theme => ({
    textTransform: 'uppercase',
    fontWeight: '700',
    color: theme.palette.primary.main,
    letterSpacing: '.1rem'
})

const sessionSubTitle = theme =>({
    fontWeight: '700',
    letterSpacing: '.1rem'
})


const columnA = theme =>({
    width: '25%',
})

const columnB = theme =>({
    width: '75%',
    paddingLeft: '3rem'
})

const session = theme =>({
    display: 'flex',
})

const aContent = theme => ({
    width: '40rem',
    padding: '5rem',
    textAlign: 'right'
})
const bContent = theme => ({
    width: '60rem',
    padding: '5rem'
})

const aSide = theme => ({
    width: '40%',
    display: 'flex',
    borderRadius: '0 5rem 0 0',
    justifyContent: 'flex-end',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
})

const bSide = theme => ({
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary
})

const container = theme => ({
    paddingTop: '20rem',
    width: '100%',
    height: '100%',
    display: 'flex'
})