const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema for contact in mongoDB
const ContactSchema = new Schema({

    first_name : {
        type: String
    },

    last_name : {
        type : String
    },

    company : {
        type : String
    },

    mobile : {
        type : Number
    },

    email : {
        type: String
    },

    job_title : {
        type : String
    },

    description : {
        type : String
    },

});

const Contact = mongoose.model('job-offers', ContactSchema);

module.exports = Contact;