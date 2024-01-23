import './app.css';
import React from "react";
import Navbar from './components/Navbar.js'
import AboutPage from './about.js';
import ProjectsPage from './projects.js';
import ContactPage from './contact.js'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Create routes for the endpoints: About page, Projects page, and Contact page

const App = () => {
    return (
        <Router>
            <Layout>
                <Navbar/>
                <Routes>
                    <Route path='' element={<AboutPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='projects' element={<ProjectsPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
