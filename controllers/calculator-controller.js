const calculatorModel = require('../models/calculator-model');

function handleCalculateRate(request, response) {
    var weight = request.query.weight;
    var type = request.query.type;

    // Calculate the rate based on the weight and type of mail
    if (type == 'stampedLetters') {
        rate = calculatorModel.calculateStampedLetter(weight)
        type = 'Letters (Stamped)';
    } else if (type == 'meteredLetters') {
        rate = calculatorModel.calculateMeteredLetter(weight)
        type = 'Letters (Metered)';
    } else if (type == 'largeEnvelopes') {
        rate = calculatorModel.calculateLargeEnvelope(weight)
        type = 'Large Envelopes (Flats)';
    } else if (type == 'firstClassPackage') {
        rate = calculatorModel.calculateFirstClass(weight);
        type = 'First-Class Package Service—Retail';
    }

    var params = {
        weight: weight,
        rate: rate,
        type: type
    }

    response.render('results', params);
}

module.exports = {
    handleCalculateRate: handleCalculateRate
}