
import { useParams } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Monitor from '../pages/portfolio.monitor.page';
import { portfolioContentList } from './portifolio.content';
import MonitorDesk from '../img/MonitorDesk.png';

const PortfolioView = props => {
    const { id } = useParams();
    const project = portfolioContentList.find(project => project.id === `project${id}`);
    const tags = project.tags;

    return (
        <Box sx={container}>
            <Box sx={intro}>
                <Box sx={introSideA}>
                    <Box mb={2}>
                        <Typography variant='body1'>{project.client}</Typography>
                        <Typography variant='h4'>{project.project}</Typography>
                        <Typography variant='body1' mt={6}>
                            {project.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Box>
                            {tags.map(tag => <Typography  key={`key${project.project}${tag}`} variant='body1' sx={tagsStyle}>{tag}</Typography>)}
                        </Box>
                    </Box>
                </Box>
                <Box sx={[introSideB, {backgroundImage: `url(${project.mainPic})`,}]} />
            </Box>
            {project.id === 'project1' && <Monitor />}
            {project.id === 'project2' && <Monitor />}
            {project.id === 'project3' && <Monitor />}
            {project.id === 'project4' && <Monitor />}
            {project.id === 'project5' && <Monitor />}
        </Box>
    )
}

export default PortfolioView;

// STYLES

const tagsStyle = theme => ({
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
    backgroundSize: 'cover'
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