import React from 'react';
import './about.css';
import {useEffect} from 'react';
import myImg from './images/about.png';
import Copyright from "./components/Copyright";

// Imports from MUI lib
import {Chip, Stack, Typography} from "@mui/material";
import Container from "@mui/material/Container";

const AboutPage = () => {

    // The title will update at every refresh
    useEffect(() => {
        document.title = 'About Page';
    }, []);

    return (
        <Container className="about-container" maxWidth="lg">
            <img
                className="profileImage"
                src={myImg}
                alt="Kfir Tayar"
            />
            <Typography variant="h3" className="title" fontFamily='Roboto' sx={{m:15}} >
                Welcome,<br />I'm Kfir Tayar, a passionate Software Developer<br />
            </Typography>

            <Typography variant="h6" className="description" fontFamily='sans-serif' sx={{m:15}} >
                Enthusiastic about coding and enjoy solving problems in creative ways. I'm a quick learner, an 'out-of-the-box' thinker, and a hard worker. I am adept at both collaborative teamwork and working independently, and I'm eager to expand my skills. Looking for a full/part-time position where I can learn and grow.
                <Typography variant="h5" className="skills-description" fontFamily='sans-serif' fontWeight='bold' sx={{marginY:6}}>
                    Actively seeking opportunities in this fields:<br />
                    <Stack direction="row" spacing={1} marginY={2} useFlexGap flexWrap="wrap">
                        <Chip className='about-label' label="Full Stack Development" color='secondary'/>
                        <Chip className='about-label' label="Computer Vision" color='secondary'/>
                        <Chip className='about-label' label="Backend / Frontend Development" color='secondary'/>
                        <Chip className='about-label' label="Data Science" color='secondary'/>
                        <Chip className='about-label' label="Machine Learning" color='secondary'/>
                    </Stack>
                    <Typography variant="h5" className="skills-description" fontFamily='sans-serif' fontWeight='bold' sx={{marginY:6}}>
                        My Stack:<br />
                        <p className='skills-description-images'>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="c" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="expressjs" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="reactjs" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="django" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt="jupyter_notebook" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="jenkins" width="80" height="80"/>
                            <img className='about-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80"/>
                        </p>
                    </Typography>
                </Typography>
            </Typography>
            <Copyright sx={{ mt: 2 }} />
        </Container>
    );
}
export default AboutPage;


