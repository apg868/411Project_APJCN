require('dotenv').config(); // necessary to load the env. variables
const express = require('express'); // import Express
const finances = require('./src/api/dbapi/routes'); // import router

const app = express(); // create Express app.
const port = 3004; // assign local port number

console.log(`Port assigned as ${port}.`)

// allows us to post and grab JSON objects from endpoints
app.use(express.json());

// define single API endpoint response at localhost:3000/
app.get('/', (req, res) => {
  res.send("Working.");
});

// define many API endpoints responses at localhost:3000/finances
// according to the router imported as finances
app.use('/finances', finances);

app.listen(port, () => console.log(`Application listening on port ${port}.`));