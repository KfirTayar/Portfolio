import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

// Imports from MUI lib
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

// Create navbar
const pages = ['About', 'Projects', 'Contact'];

function Navbar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext>
            <Box sx={{ width: '100%' }}
                 display="flex"
                 justifyContent="center"
                 alignItems="center"
                 width="100%">
                 {/*<div><img src='logo.png' width='100' height='100' alt='logo' align='left'/></div>*/}
                <Tabs
                    value={false}
                    aria-label="wrapped label tabs example"
                >
                    {pages.map((page) => (
                        <Tab key={page} label={page} component={Link} to={`/${page.toLowerCase()}`} />
                    ))}
                </Tabs>
            </Box>

            {pages.map((page) => (
                <TabPanel key={page} value={`/${page.toLowerCase()}`}>
                    {/!* Content for each page *!/}
                    <div>{page} Page Content</div>
                </TabPanel>
            ))}
        </TabContext>
    );
}
export default Navbar;
