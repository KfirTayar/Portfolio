const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// The request sending in method POST
router.route('/api/contact').post((req, res, next) => {

    // Preparing the parameters to create a new Job Offer document
    const first_name = req.body.firstName;
    const last_name = req.body.lastName;
    const company = req.body.company;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const job_title = req.body.jobTitle;
    const description = req.body.description;

    // Building a new contact item
    const currentJobOffer = new Contact({
        first_name: first_name,
        last_name: last_name,
        company: company,
        mobile: mobile,
        email: email,
        job_title: job_title,
        description: description,
    });

    // Creating a new Job Offer document
    Contact.create(currentJobOffer).then( (currentJobOffer) => {
        res.send(`New Job Offer created: ${currentJobOffer}`);
    }).catch(next);

})

module.exports = router;