import { Box, Switch, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';


const LightSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: yellow[600],
      '&:hover': {
        backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: yellow[600],
    },
  }));



const SwitchMode = props => (
      <Box sx={{display: 'flex', alignItems: 'center', marginRight: '4rem'}}>
        <LightSwitch onChange={props.handleChange} size="small" />
      </Box>
    );
  
export default SwitchMode;