const w10Model = require('../models/w10-model');

function getPerson(request, response) {
    const personId = request.params.id;

    w10Model.getPersonModel(personId, function (err, person) {
        if (err) {
            console.error(err);
            return;
        }

        response.json(person);
    })
}

module.exports = {
    handleGetPerson: getPerson
}