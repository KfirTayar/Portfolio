const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const contactRouter = require('./routes/contactRoute');
dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to mongoDB Atlas
mongoose.connect(process.env.ATLAS_URI);

// Checking if the DB is/isn't connected
const db = mongoose.connection;
db.on('error', function() {console.log('The DB is not connected!')});
db.once('open', function() {console.log('The DB is connected!')});

app.use('/', contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;