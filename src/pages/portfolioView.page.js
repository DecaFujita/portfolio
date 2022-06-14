import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Monitor from '../pages/portfolio.monitor.page';

const PortfolioView = props => {

    return (
        <Box sx={container}>
            <Box sx={intro}>
                <Box sx={introSideA}>
                    <Box mb={2}>
                        <Typography variant='body1'>Cencosud</Typography>
                        <Typography variant='h4'>Klaüben</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1'>
                            Klaüben is Cencosud's own brand for premium appliance.
                            The project consisted of branding, packaging and point of 
                            purchased developments, as well as material for website
                            and social media.
                        </Typography>
                        <br/>
                        <Typography variant='body1' sx={tags}>
                            branding <br/>
                            packaging <br/>
                            pop <br/>
                            web <br/>
                            social media <br/>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={introSideB} />
            </Box>
            {props.monitor && <Monitor />}
        </Box>
    )
}

export default PortfolioView;

// STYLES

const tags = theme => ({
    color: theme.palette.primary.main,
    fontWeight: '600'
})

const introSideA = theme => ({
    width: '35rem',
    paddingRight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
})

const introSideB = theme => ({
    width: '65rem',
    justifyContent: 'flex-start',
    background: 'blue'
})

const intro = theme => ({
    width: '100rem',
    margin: '0 auto',
    height: '40rem',
    display: 'flex',
})

const container = theme => ({
    width: '100%',
    minHeight: '100vh',
    paddingTop: '15rem',
})