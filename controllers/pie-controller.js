function getPieTypes(request, response) {
    const pieResults = [
        {
            id: 12, type: 'peach'
        },
        {
            id: 342, type: 'cherry'
        },
        {
            id: 4, type: 'pecan'
        },
        {
            id: 6, type: 'pizza'
        }
    ];

    response.json(pieResults);
}

function getPie(request, response) {
    // Get the parameters
    const id = request.params.id;
    console.log('request for pie with id', id);

    const result = {
        id: id,
        type: 'Lemon Merengue',
        calories: 150,
        quantity: 3
    };

    response.json(result);
}

function createPie(request, response) {
    console.log('Creating a pie');

    const type = request.body.type;
    const quantity = request.body.quantity;
    console.log('type: ' + type + ', quantity: ' + quantity);

    const result = {id: 3, type: type};
    response.json(result);
}

module.exports = {
    getPieTypes: getPieTypes,
    handleGetPie: getPie,
    createPie: createPie
}