import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './contact.css';
import Paper from "@mui/material/Paper";

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

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        alert(data.get('email'));
        console.log({
            email: data.get('email'),
        });
    };

    return (
        <Container className="contact-container" component="main" maxWidth="md">
            <Typography variant="h4" className="contact-options" align={"center"}>
                How to reach me?
            </Typography>

                <Paper className="contact-paper">
                    <p className='social-links'>
                        <a href="https://www.linkedin.com/in/kfir-tayar/" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-page" height="60" width="60" /></a>
                    </p>
                    <h1>OR</h1>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
                    <h4>Fill the contact file and I'll be in touch :)</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="company"
                                label="Company"
                                name="company"
                                autoComplete="Null"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="mobile"
                                label="Mobile"
                                name="mobile"
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="job-title"
                                label="Job Title"
                                name="job-title"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="decryption"
                                label="Tell me about this job offer"
                                type="text"
                                id="decryption"
                                multiline
                                rows={7}
                                autoComplete="Null"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        SEND
                    </Button>
                </Box>
                    <h1>OR</h1>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kfirtayar145@gmail.com" target="_blank">
                        <img src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" height='60px' width='60px'/>
                    </a>

        </Paper>
            <Copyright sx={{ mt: 2 }} />
    </Container>
    );
}

export default ContactPage;