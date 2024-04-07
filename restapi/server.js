// require is a NodeJS built-in function to load external modules
const express = require('express'); 
// load the router from students/routes.js
const studentRoutes = require('./src/student/routes.js')

// create express application and assign to app
const app = express();
// assign local port number
const port = 3000;

// allows us to post and grab json objects from endpoitns
app.use(express.json());

// define api endpoint at localhost:3000
app.get("/", (req, res) => {
  // upon completion, send "Hello, James." string
  res.send("Hello, James.");
});

// make use of string /api/v1/students and acquired router (route at the string as prefix)
app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));