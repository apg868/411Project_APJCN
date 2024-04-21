// Require built-in or third-party modules
require('dotenv').config(); // Ensures that environment variables are loaded
const express = require('express');
const cors = require('cors');


// Require routers from your routes directory
const plaidRouteList = require('./src/routes/plaidRoutes.js'); // Ensure this router is set up to use the Plaid client from a separate config

// Create the Express application
const app = express();
const port = process.env.PORT || 3001; // Allows for an environment variable to set port, with a default of 3001

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Test route to confirm server is running
app.get("/", (req, res) => {
    res.send("Hello, James.");
});


// Plaid-related routes (make sure plaidRouteList correctly imports the Plaid client)
app.use('/plaidapi', plaidRouteList);



// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
