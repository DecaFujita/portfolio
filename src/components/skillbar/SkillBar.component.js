import { Box } from "@mui/material"

const SkillBar = props => {
    return (
        <Box sx={bar}>
            <Box sx={[juice, {width: props.percentage}]}/>
        </Box>
    )
}

export default SkillBar;

const bar = theme => ({
    width: '100%',
    height: '.8rem',
    borderRadius: '5rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    justifyContent: 'flex-start'
})

const juice = theme => ({
    height: '100%',
    borderRadius: '5rem',
    background: theme.palette.secondary.main
})

