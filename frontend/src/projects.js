import React, {useEffect} from 'react';
import './projects.css';
import CustomCard from "./customCard.js";

// Imports from MUI lib
import Paper from "@mui/material/Paper";
import {Container, Grid} from "@mui/material";
import Copyright from "./components/Copyright";

// Import images
import FriendOnTheRoadImg from './images/friend_on_the_road.jpg';
import DogAdoptionDashboardImg from './images/dog_adoption_dashboard.png'
import ParkingMeterImg from './images/parking_meter.jpg';
import CostManagerClientImg from './images/cost_manager_client_side.jpg';
import CostManagerServerImg from './images/cost_manager_server_side.jpg';
import GearboxPredictionImg from './images/gearbox_prediction.jpg';
import SecureDevelopmentImg from './images/secure_development.jpg';
import QuizzyLibraryImg from './images/quizzy_library.jpg';
import TextAnalysisImg from './images/text_analysis.jpg';
import PortfolioImg from './images/portfolio.jpg';

function ProjectsPage() {

    // The title will update at every refresh
    useEffect(() => {
        document.title = 'Projects Page';
    }, []);

    const cardData = [
        {
            id: 1,
            title: 'Dog Adoption Dashboard',
            content: 'MERN Stack application that provides a manager control interface for a dog adoption organization.',
            image: DogAdoptionDashboardImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Dog_Adoption_Dashboard.git" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 2,
            title: 'COST MANAGER - SERVER SIDE',
            content: 'A cost manager RESTful web service that was built with Express.js and using MongoDB.',
            image: CostManagerServerImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Cost-Manager-Server-Side" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 3,
            title: 'COST MANAGER - CLIENT SIDE',
            content: 'A cost manager application that was built with React.js and using Local Storage.',
            image: CostManagerClientImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Cost-Manager-Client-Side" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 4,
            title: 'FRIEND ON THE ROAD',
            content: 'Object tracking project that was built with Python and using OpenCV library.',
            image: FriendOnTheRoadImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Friend-on-the-road" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 5,
            title: 'TEXT ANALYSIS',
            content: 'ML model that gets a corpus and uses ML algorithms (KNN, Decision-Tree, SVM, etc) and classifies the texts by gender.',
            image: TextAnalysisImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/ML-Text-Analysis" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 6,
            title: 'GEARBOX PREDICTION',
            content: 'A crawler that collects data from a rental car website and predicts which gearbox the car was equipped with.',
            image: GearboxPredictionImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Gearbox-prediction" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 7,
            title: 'QUIZZY LIBRARY',
            content: 'A Java library for creating quizzes implemented with the following design patterns: Singleton, DAO, Factory, Prototype, and Builder.',
            image: QuizzyLibraryImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Quizzy-Library" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 8,
            title: 'PARKING METER',
            content: 'A Parking Meter program that was built with MFC framework and using event-driven programming.',
            image: ParkingMeterImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Parking-Meter" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 9,
            title: 'MERN STACK PORTFOLIO',
            content: 'MERN Stack application that showcases my portfolio.',
            image: PortfolioImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Portfolio" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 10,
            title: 'SECURE DEVELOPMENT',
            content: 'A website that is vulnerable to SQLI and XSS attacks.',
            image: SecureDevelopmentImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar/Secure-Development" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

    ];

    return (
        <Container className="projects-container" maxWidth="md">
            <Paper className="projects-paper" elevation={4} sx={{backgroundColor: '#ffffff'}}>
                <Grid container spacing={5}>
                    {cardData.map((card) => (
                        <Grid item key={card.id} className="card">
                            <CustomCard
                                title={card.title}
                                content={card.content}
                                image={card.image}
                                actionButtonLabel={card.actionButtonLabel}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <Copyright sx={{ mt: 2 }} />
        </Container>
    );
}

export default ProjectsPage;
