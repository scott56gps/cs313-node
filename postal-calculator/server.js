const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Set up Static File serving
app.use(express.static('public'));

// Set up EJS
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/calculate-rate', handleCalculateRate);

function handleCalculateRate(request, response) {
    var weight = request.query.weight;
    var type = request.query.type;

    // Calculate the rate based on the weight and type of mail
    if (type == 'stampedLetters') {
        rate = calculateStampedLetter(weight)
    } else if (type == 'meteredLetters') {
        rate = calculateMeteredLetter(weight)
    } else if (type == 'largeEnvelopes') {
        rate = calculateLargeEnvelope(weight)
    } else if (type == 'firstClassPackage') {
        rate = calculateFirstClass(weight);
    }

    var params = {
        weight: weight,
        rate: rate,
        type: type
    }

    response.render('results', params);
}

function calculateStampedLetter(weight) {
    if (weight < 1) {
        return 0.55
    } else if (weight < 2) {
        return 0.70
    } else if (weight < 3) {
        return 0.85
    } else if (weight < 3.5) {
        return 1.00
    } else {
        return calculateLargeEnvelope(weight)
    }
}

function calculateMeteredLetter(weight) {
    if (weight < 1) {
        return 0.50
    } else if (weight < 2) {
        return 0.65
    } else if (weight < 3) {
        return 0.80
    } else if (weight < 3.5) {
        return 0.95
    } else {
        return calculateLargeEnvelope(weight)
    }
}

function calculateLargeEnvelope(weight) {
    if (weight < 1) {
        return 1.00
    } else if (weight < 2) {
        return 1.15
    } else if (weight < 3) {
        return 1.30
    } else if (weight < 4) {
        return 1.45
    } else if (weight < 5) {
        return 1.45
    } else if (weight < 6) {
        return 1.45
    } else if (weight < 7) {
        return 1.45
    } else if (weight < 8) {
        return 1.45
    } else if (weight < 9) {
        return 1.45
    } else if (weight < 10) {
        return 1.45
    } else if (weight < 11) {
        return 1.45
    } else if (weight < 12) {
        return 1.45
    } else if (weight < 13) {
        return 1.45
    }
}

function calculateFirstClass(weight) {

}

app.listen(port, function () {
    console.log('Server now listening on port ' + port);
})