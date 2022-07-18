
import { useParams } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MonitorPage from '../pages/portfolio.monitor.page';
import KlaubenPage from '../pages/portfolio.klauben.page';
import CruzadaPage from '../pages/portfolio.cruzada.page';
import RetailOnePage from '../pages/portfolio.retailone.page';
import MobdiqPage from '../pages/portfolio.mobdiq.page';
import PackagingPage from '../pages/portfolio.packaging.page';
import { portfolioContentList } from './portifolio.content';
import GoBackBtn from '../components/buttons/GoBackBtn.component';
import { ScrollToTop } from '../utils';

const PortfolioView = props => {
    const { id } = useParams();
    const project = portfolioContentList.find(project => project.id === `project${id}`);
    const tags = project.tags;
    const DarkMode = props.isDarkMode;   
    ScrollToTop();

    return (
        <Box sx={container}>
            <Box sx={back}>
                <GoBackBtn />
            </Box>
            <Box sx={intro}>
                <Box sx={introSideA}>
                    <Box mb={2}>
                        <Typography variant='h6' sx={client}>{project.client}</Typography>
                        <Typography variant='h4'>{project.project}</Typography>
                        <Typography variant='body1' mt={6}>
                            {project.description}
                        </Typography>
                    </Box>
                    <Box sx={{color: project.color}}>
                        {tags.map(tag => <Typography  key={`key${project.project}${tag}`} variant='body1' sx={tagsStyle}>{tag}</Typography>)}
                    </Box>
                </Box>
                <Box sx={[introSideB, {backgroundImage: DarkMode ? `url(${project.mainPicNeg})` : `url(${project.mainPic})`}]} />
            </Box>
            {project.id === 'project1' && <MonitorPage />}
            {project.id === 'project2' && <MobdiqPage />}
            {project.id === 'project3' && <PackagingPage />}
            {project.id === 'project4' && <KlaubenPage />}
            {project.id === 'project5' && <CruzadaPage />}
            {project.id === 'project6' && <RetailOnePage />}
        </Box>
    )
}

export default PortfolioView;

// STYLES

const back = theme => ({
    width: '100rem',
    margin: '0 auto',
    marginBottom: '5rem'
})

const client = theme => ({
    fontWeight: '600'
})

const tagsStyle = theme => ({
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
    paddingTop: '10rem',
})