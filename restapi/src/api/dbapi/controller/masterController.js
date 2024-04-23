const pool = require('../../../../fdb');
const queries = require('../queries/masterQueries');

// GET

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

// Get user by URI-encoded email address string
const getUserWithEmail = (req, res) => {
  const email = decodeURIComponent(req.query.email);
  console.log(`getUserWithEmail GET with email: ${email}`)

  pool.query(queries.getUserWithEmail, [email], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

// PUT

// put new user with supplied email and private token
const addUserWithEmail = (req, res) => {
  const { email, p_token } = req.body; // JSON object destructuring
  // Check for preexisting entry
  pool.query(queries.getUserWithEmail, [email], (error, results) => {
    if (error) {
      console.error('Error checking for existing user:', error);
      return res.status(500).send('Internal Server Error');
    }
    if (results.rows.length) { // User already exists
      return res.status(400).send(`User with supplied email already exists in the database.`);
    }

    // Create new entry
    pool.query(queries.addUserWithEmail, [email, p_token], (error, results) => {
      if (error) {
        console.error('Error adding new user:', error);
        return res.status(500).send('Internal Server Error');
      }
      const msg = `User with ${email} email created successfully.`;
      console.log(msg);
      return res.status(201).send(msg);
    });
  });
};

const checkForEmail = async (email) => {
  try {
    const results = await pool.query(queries.getUserWithEmail, [email]);
    return results.rows.length > 0;
  } catch (error) {
    console.error('Database error during email check:', error);
    throw error;  // Rethrow to handle in the caller function
  }
};

const patchToken = async (email, p_token) => {
  try {
    const userExists = await checkForEmail(email);
    if (!userExists) {
      throw new Error('User not found');
    }
    const result = await pool.query(queries.updatePToken, [email, p_token]);
    if (result.rowCount === 0) {
      throw new Error('No rows updated; user not found');
    }
    return 'Token updated successfully';
  } catch (error) {
    console.error('Error updating token:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

module.exports = {
  getUsers,
  getUserWithEmail,
  addUserWithEmail,
  patchToken,
}