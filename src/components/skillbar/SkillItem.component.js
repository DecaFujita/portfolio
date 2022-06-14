
import { Box, Typography } from '@mui/material';
import SkillBar from './SkillBar.component';

const SkillItem = props => {

    return (
           <Box sx={[session, skill]}>
                <Typography variant='body2' sx={skillTitle}>
                    {props.skill}
                </Typography>
                <Box sx={{width: '20rem', height: '100%', display: 'flex', alignItems:'center'}} >
                    <SkillBar percentage={props.percentage} /> 
                </Box>
            </Box>
    )
}

export default SkillItem;

const skill = theme => ({
    height: '2rem',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: '.75rem'
})

const skillTitle = theme => ({
    fontWeight: '700',
    color: theme.palette.secondary.main,
    width: '35%',
    letterSpacing: '0',
    textAlign: 'left',
})

const session = theme =>({
    display: 'flex',
})