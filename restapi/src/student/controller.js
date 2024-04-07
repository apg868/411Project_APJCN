// load pool from database file
const pool = require('../../db');
const queries = require('./queries');

// where we store query logistics ("business logic") related each route

// define getStudents function
const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    // if response status is OK, send alls students (rows)
    // back from database
    res.status(200).json(results.rows);
  });
};

//
const getStudentById = (req, res) => {
  // parse integer from URL route
  const id = parseInt(req.params.id)
  // query, id argument (arguments stored in array) for use in query, callback function
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows)
  })
}

const addStudent = (req, res) => {
  // req.body is an object with four key-values
  const { name, email, age, dob } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    // if there is an array of even length 1
    if (results.rows.length) {
      res.send("Email already exists.");
    }

    // add student to database
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("Student created successfully!");
      console.log("Student created.");
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send(`Student does not exist in database.`);
    };
    
    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send(`Student of id ${id} removed successfully.`);
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("Student does not exist in the database.");
    };

    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully.");
    });
  });
};

// export an object that contains function(s)
module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};