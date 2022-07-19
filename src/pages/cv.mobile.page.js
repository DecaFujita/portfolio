import { Box, Divider, Typography, Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { 
    SocialIcoCodePen, 
    SocialIcoLinkedIn, 
    SocialIcoGitHub, 
    SocialIcoInsta,
    SocialIcoMessenger,
    SocialIcoWhatsapp,
    EmailIco,
    PinIco,
} from '../components/icons/Icons';
import IconsApps from '../components/icons/IconsApps';
import SkillItem from '../components/skillbar/SkillItem.component';
import WorkItem from "../components/cv/WorkList.component";
import { skillList, workList } from '../components/skillbar/SkillList.component';
import IconsInterests from '../components/icons/iconsInterests';
import { ScrollToTop } from "../utils";
import { Fragment } from 'react';

const CVMobile = props => {
    const theme = useTheme();
    ScrollToTop();

    return (
        <Fragment>
            <Box sx={aSide}>
                <Box sx={aContent}>
                    <Box>
                        <Typography variant='h4'>Deca Fujita</Typography>
                        <Typography variant='body1' mt={.5} sx={{fontWeight: '600'}}>
                            Visual Designer + Front end developer
                        </Typography>
                        <Box sx={personalInfo} mt={5}>
                            <PinIco fill={theme.palette.secondary.main}/>
                            <Typography variant='body1' ml={1.4}>
                                Santiago - Chile
                            </Typography> 
                        </Box>
                        <Box sx={personalInfo} mt={1}>
                            <EmailIco fill={theme.palette.secondary.main}/>
                            <Typography variant='body1' ml={1}>
                                decafujita@gmail.com
                            </Typography>
                        </Box>
                        {/* <Box sx={personalInfo} mt={1}>
                            <SocialIcoWhatsapp fill={theme.palette.secondary.main}/>
                            <Typography variant='body1' mr={2}>
                                +56 99591 7225
                            </Typography>
                        </Box> */}
                    </Box>
                    <Box sx={socialLinks}>
                        <Link sx={personalLink} href="https://cl.linkedin.com/in/deca-fujita-71032249" target="_blank">
                            <SocialIcoLinkedIn fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} href="https://github.com/DecaFujita" target="_blank" mt={1.5}>
                            <SocialIcoGitHub fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} href="https://codepen.io/decafujita" target="_blank" mt={1.5}>
                            <SocialIcoCodePen fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} mt={1.5}>
                            <SocialIcoInsta fill={theme.palette.secondary.main}/>
                        </Link>
                        {/* <Link sx={personalLink} mt={1.5} mb={8}>
                            <SocialIcoMessenger fill={theme.palette.secondary.main}/>
                        </Link> */}
                    </Box>
                </Box>
            </Box>

            {/* B SIDE */}
            <Box sx={bSide}>
                <Box sx={bContent}>
                    {/* <Typography variant='h3'>Curriculum</Typography> */}
                    <Typography variant='body1' mb={5}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, facilisi.
                    </Typography>
                    <Divider sx={dividerB} />
                    {/* WORK EXPERIENCE */}
                    <Box sx={session}  mt={4} mb={2}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Work experience
                            </Typography>
                        </Box>
                        <Box sx={columnB} mb={1}>
                        { workList.map(item => <WorkItem title={item.title} company={item.company} period={item.period} />)}
                        </Box>
                    </Box>
                    <Divider sx={dividerB} />
                    {/* EDUCATION    */}
                    <Box sx={session}  mt={4}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Education
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                Goldsmiths,<br/>Univertisty of London
                            </Typography>  
                            <Typography variant='body2' mb={2}>
                                Master of Arts (MA), Brands, Communication <br/>
                                and Culture (Promotional Media) <br/>
                                2012 - 2013
                            </Typography>                              
                            
                            <Typography variant='body1' sx={sessionSubTitle}>
                                Universidade Federal<br/>do Rio de Janeiro
                            </Typography>
                            <Typography variant='body2' mb={5}>
                                Bachelor’s degree, Design <br/>
                                1999 - 2003
                            </Typography>
                        </Box>
                    </Box>
                    <Divider sx={dividerB} /> 
                    {/* CERTIFICATION */}
                    <Box sx={session}  mt={4}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Certification
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                CS50’s Web Programming with Python and Java Script
                            </Typography>  
                            <Typography variant='body2' mb={2}>
                                Harvard - edX<br/>
                                2021 
                            </Typography>                              
                            
                            <Typography variant='body1' sx={sessionSubTitle}>
                                CS50’s Introduction to Computer Science
                            </Typography>
                            <Typography variant='body2' mb={4}>
                                Harvard - edX<br/>
                                2020
                            </Typography> 
                        </Box>
                    </Box>
                    <Divider sx={dividerB} /> 
                    {/* LANGUAGES */}
                    <Box sx={session}  mt={4}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                Languages
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body1' sx={sessionSubTitle}>
                            Portuguese
                            </Typography>  
                            <Typography variant='body2' mb={2}>                              
                            Mother tongue
                            </Typography>
                            <Typography variant='body1' sx={sessionSubTitle}>
                            Spanish
                            </Typography>
                            <Typography variant='body2' mb={2}>                              
                            Fluent
                            </Typography>
                            <Typography variant='body1' sx={sessionSubTitle}>
                            English
                            </Typography>
                            <Typography variant='body2'>                              
                            Fluent
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={cSide}>
                <Box sx={[session, {justifyContent: 'space-between'}]} mt={4} mb={3}>
                    <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                        TECHNICAL SKILLS
                    </Typography>
                    <Box sx={{width: '25rem'}}>
                        <IconsApps />
                    </Box>
                </Box>
                { skillList.map(item => <SkillItem key={item.id} skill={item.skill} percentage={item.percentage} />)}
                <br/><br/>
                <Divider sx={dividerA}/>
                {/* INTERESTS */}
                <Box sx={[session, {justifyContent: 'space-between'}]} mt={5}>
                    <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                        INTERESTS
                    </Typography>
                    <Box sx={{width: '25rem'}} mb={2}>
                    <IconsInterests />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CVMobile;

//STYLES

const personalLink = theme => ({
    display: 'flex',
    justifyContent: 'flex-end',
    height: '3rem',
    alignItems: 'center',
    cursor: 'pointer',
    transform: 'translateY(-1rem)',
    
    '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    }
})

const personalInfo = theme => ({
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
})

const socialLinks = theme => ({
    transform: 'translateY(1.5rem)'
})

const dividerB = theme => ({borderTop: `.2px solid ${theme.palette.primary.main}`})
const dividerA = theme => ({borderTop: `.2px solid ${theme.palette.secondary.main}`})

const sessionTitle = theme => ({
    textTransform: 'uppercase',
    fontWeight: '700',
    color: theme.palette.primary.main,
    letterSpacing: '.1rem',
})

const skillTitle = theme => ({
    fontWeight: '700',
    color: theme.palette.secondary.main,
    width: '30%',
    letterSpacing: '0',
    textAlign: 'left',
})

const sessionSubTitle = theme =>({
    fontWeight: '700',
    letterSpacing: '.1rem'
})

const columnA = theme =>({
    width: '30%',
})

const columnB = theme =>({
    width: '70%',
    paddingLeft: '3rem'
})

const session = theme =>({
    display: 'flex',
})

const aContent = theme => ({
    display: 'flex',
    justifyContent: 'space-between'
})

const aSide = theme => ({
    width: '100%',
    height: '26rem',
    minWidth: '40rem',
    padding: '4rem 3rem 3rem 3rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
})

const bContent = theme => ({
    margin: '0 auto',
})

const bSide = theme => ({
    marginTop: '2rem',
    minWidth: '40rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    padding: '3rem'
})

const cSide = theme => ({
    marginTop: '1rem',
    minWidth: '40rem',
    width: '100%',
    padding: '2rem 3rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
})