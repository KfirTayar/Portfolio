const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const contactRouter = require('./routes/contactRoute');

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to mongoDB Atlas
mongoose.connect('mongodb+srv://kfir:arESGxMtkxl2IAvy@cluster0.veqt6mx.mongodb.net/contactDB');

// Checking if the DB is/isn't connected
const db = mongoose.connection;
db.on('error', function() {console.log('The DB is not connected!')});
db.once('open', function() {console.log('The DB is connected!')});

app.use('/', contactRouter);

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});*/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;