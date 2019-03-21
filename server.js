const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Send in the Controllers!
const calculatorController = require('./controllers/calculator-controller');
const pieController = require('./controllers/pie-controller');
const w10Controller = require('./controllers/w10-controller');
const scripturesController = require('./controllers/scriptures-controller');

// Set up Static File serving
app.use(express.static('public'));

// Set up JSON body parsing
app.use(express.json());

// Set up URL Encoded body parsing
app.use(express.urlencoded({extended: true}));

// Set up EJS
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/calculate-rate', calculatorController.handleCalculateRate);

app.get('/pieTypes', pieController.getPieTypes);
app.get('/pie/:id', pieController.handleGetPie);
app.post('/pie', pieController.createPie);

// Week 10 Team Activity
app.get('/getPerson/:id', w10Controller.handleGetPerson);

// Week 11 Team Activity - Scriptures
app.get('/scriptures', scripturesController.hanldeGetScriptures);

app.listen(port, function () {
    console.log('Server now listening on port ' + port);
})