const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

function getPerson(request, response) {
    const personId = request.params.id;
    var person;

    // Connect to the database by checking out a client
    pool.connect(function (error, client, done) {
        if (error) throw error

        // Create a query object
        var query = {
            text: 'SELECT * FROM person WHERE id = $1',
            values: [personId]
        }

        // Query the Database
        client.query(query, function (err, queryResult) {
            // Release the client from the pool, since we just used it and we
            //  have no need for it at the current moment.
            done();

            if (err) {
                console.error('There was an error querying the database:', err);
                return;
            }

            console.log(queryResult.rows);
        })
    })
}

module.exports = {
    handleGetPerson: getPerson
}