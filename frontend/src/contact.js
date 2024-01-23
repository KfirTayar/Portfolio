import {useEffect, useState} from "react";
import axios from 'axios';
import './contact.css';
import copy from 'clipboard-copy';
import Copyright from './components/Copyright';

// Imports from MUI lib
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import {Snackbar} from "@mui/material";

const ContactPage = () => {

    const [copyMsg, setCopyMsg] = React.useState(false);
    const [sendData, setSendData] = React.useState(false);

    const handleClose = () => {
        setCopyMsg(false);
        setSendData(false);
    };

    // The title will update at every refresh
    useEffect(() => {
        document.title = 'Contact Page';
    }, []);

    const myGmail = 'kfirtayar145@gmail.com';

    const handleCopyToClipboard = async () => {
        try {
            await copy(myGmail);
            setCopyMsg(true);
            setTimeout(handleClose, 3000);
        } catch (error) {
            console.error('Failed to copy email to clipboard:', error);
        }
    };

    // Creating variables with an initial state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');

    // Clearing the fields after pressing the button "ADD COST"
    function clearButtons(){
        setFirstName('');
        setLastName('');
        setCompany('');
        setMobile('');
        setEmail('');
        setJobTitle('');
        setDescription('');
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            company,
            mobile,
            email,
            jobTitle,
            description,
        };

        axios.defaults.baseURL = 'https://kfirtayar.onrender.com';

        setSendData(true);
        setTimeout(handleClose, 3000);

        try {
            await axios.post('/api/contact', formData);
            console.log(('Data submitted successfully!'))
        } catch (error) {
            console.log('Error submitting data:', error);
        }

        clearButtons();
    }


    return (
        <div className='a'>
        <Container className="contact-container" component="main" maxWidth="md">
            <Typography variant="h4" className="contact-options" fontFamily='cursive' align={"center"}>
                How to reach me?
            </Typography>
                <Paper className="contact-paper" elevation={4} sx={{mt:2}}>
                    <p className='social-links'>
                        <a href="https://www.linkedin.com/in/kfir-tayar/" target="blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-page" height="60" width="60" /></a>
                    </p>
                    <h1>OR</h1>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
                    <Typography variant="h8" fontFamily='cursive' align={"left"}>
                        Fill out the contact form and I'll be in touch as soon as possible :)
                    </Typography>
                    <Grid container spacing={2} sx={{mt:0.1}}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={firstName}
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={lastName}
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={company}
                                id="company"
                                label="Company"
                                name="company"
                                onChange={e => setCompany(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={mobile}
                                id="mobile"
                                label="Mobile"
                                name="mobile"
                                onChange={e => setMobile(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                fullWidth
                                value={email}
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                fullWidth
                                value={jobTitle}
                                id="jobTitle"
                                label="Job Title"
                                name="job-title"
                                onChange={e => setJobTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={description}
                                name="decryption"
                                label="Tell me about this job offer"
                                id="decryptionID"
                                multiline
                                rows={7}
                                onChange={e => setDescription(e.target.value)}
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
                    <Snackbar
                        open={sendData}
                        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                        message='Data submitted! Thank you for your time.'
                    />
                </Box>
                    <h1>OR</h1>
                    <img src="https://img.icons8.com/color/48/gmail-new.png" className='gmail-img' alt="gmail" height='60px' width='60px' onClick={handleCopyToClipboard}/>
                    <Snackbar
                        open={copyMsg}
                        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                        message='Email copied to clipboard'
                    />
        </Paper>
            < br/>
            <Copyright/>
    </Container>
        </div>
    );
}

export default ContactPage;