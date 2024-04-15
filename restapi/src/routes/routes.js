// store routes
// we use Express's router
const { Router } = require('express');

const controller = require('./../controllers/controller');

// define an Express router
const router = Router();

// GET -> send back information
router.get('/', controller.getStudents); // calls function getStudents with req and response as parameters
router.get('/:id', controller.getStudentById) // can be /1 or /2 to find students by id

// POST -> give information to post
router.post('/', controller.addStudent);

// DELETE -> remove information from db
router.delete('/:id', controller.removeStudent);

// PUT -> update information from dv
router.put('/:id', controller.updateStudent);

module.exports = router;