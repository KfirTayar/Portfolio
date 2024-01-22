import './app.css';
import React from "react";
import Navbar from './components/Navbar.js'
import AboutPage from './about.js';
import ProjectsPage from './projects.js';
import ContactPage from './contact.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Typography} from "@mui/material";

// Create routes for the endpoints: About page, Projects page, and Contact page

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='' element={<AboutPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='projects' element={<ProjectsPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;