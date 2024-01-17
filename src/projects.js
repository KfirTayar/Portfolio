import React from 'react';
import './projects.css';
import CustomCard from "./customCard.js";

// Imports from MUI lib
import Paper from "@mui/material/Paper";
import {Container, Grid, Typography} from "@mui/material"; // Import your styles

// Import images
import FriendOnTheRoadImg from './images/friend_on_the_road.jpg';
import ParkingMeterImg from './images/parking_meter.jpg';
import CostManagerClientImg from './images/cost_manager_client_side.jpg';
import CostManagerServerImg from './images/cost_manager_server_side.jpg';
import GearboxPredictionImg from './images/gearbox_prediction.jpg';
import SecureDevelopmentImg from './images/secure_development.jpg';
import PongGameImg from './images/pong_game.jpg';
import TextAnalysisImg from './images/text_analysis.jpg';
import Link from "@mui/material/Link";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Kfir Tayar
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function ProjectsPage() {

    const cardData = [
        {
            id: 1,
            title: 'FRIEND ON THE ROAD',
            content: 'Object tracking project that was built with Python and using OpenCV library.',
            image: FriendOnTheRoadImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 2,
            title: 'PARKING METER',
            content: 'A Parking Meter program that was built with MFC framework using event-driven programming.',
            image: ParkingMeterImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 3,
            title: 'COST MANAGER - CLIENT SIDE',
            content: 'A cost manager application that was built with React.js and using Local Storage.',
            image: CostManagerClientImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 4,
            title: 'COST MANAGER - SERVER SIDE',
            content: 'A cost manager RESTful web service that was built with Express.js and using MongoDB.',
            image: CostManagerServerImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 5,
            title: 'GEARBOX PREDICTION',
            content: 'A crawler that collects data from a rental car website and predicts which gearbox the car was equipped with.',
            image: GearboxPredictionImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 6,
            title: 'TEXT ANALYSIS',
            content: '...',
            image: TextAnalysisImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 7,
            title: 'PONG',
            content: 'Classic pong game with some extra features',
            image: PongGameImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        {
            id: 8,
            title: 'SECURE DEVELOPMENT',
            content: 'A website that is vulnerable to SQLI and XSS attacks.',
            image: SecureDevelopmentImg,
            actionButtonLabel: <div className='open-github-page'>
                <a href="https://github.com/KfirTayar" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-page" height="40" width="40" /></a>
                <div className="overlay-text">project page</div> </div>,
        },

        // Add more card data as needed
    ];

    return (
        <Container className="projects-container" maxWidth="lg">
            <Paper className="projects-paper" elevation={10} sx={{backgroundColor: '#ffffff'}}>
                <Grid container spacing={2}>
                    {cardData.map((card) => (
                        <Grid item key={card.id} className="card">
                            {/* Use your CustomCard component */}
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
