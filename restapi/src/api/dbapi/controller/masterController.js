const pool = require('../../../../fdb');
const queries = require('../queries/masterQueries');
const plaid = require('plaid');
const client = require('./../../plaidapi/plaidclient')


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

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


const patchToken = async (email, p_token) => {
  try {
    const result = await pool.query(queries.updatePToken, [email, p_token]);
    if (result.rowCount === 0) {
      throw new Error('No rows updated; user not found');
    }
    await sleep(1000 * 60)
    const transactions = await getTransactions(p_token)
    return transactions;
  } catch (error) {
    console.error('Error updating token:', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};


const getTransactions = async (accessToken) => {
  const request = {
    access_token: accessToken,
    start_date: '2018-01-01',
    end_date: '2020-02-01'
  };

  try {
    let response = await client.transactionsGet(request);
    let transactions = response.data.transactions;
    const total_transactions = response.data.total_transactions;

    // Paginate to fetch all transactions
    while (transactions.length < total_transactions) {
      const paginatedRequest = {
        access_token: accessToken,
        start_date: '2018-01-01',
        end_date: '2020-02-01',
        options: { offset: transactions.length }
      };
      const paginatedResponse = await client.transactionsGet(paginatedRequest);
      transactions = transactions.concat(paginatedResponse.data.transactions);
    }
    console.log("Transactions fetched successfully");
    return transactions;
  } catch (error) {
    console.error("Error during transaction fetch:", error);
    if (error.response && error.response.data.error_code === 'PRODUCT_NOT_READY') {
      console.error('Product not ready, retrying in 30 seconds...');
      await new Promise(resolve => setTimeout(resolve, 30000)); // Wait for 30 seconds
      return getTransactions(accessToken); // Retry fetching transactions
    }
    throw error; // Rethrow the error for any other types of errors
  }
};







const setTransactions = (user_id, p_token) => {


}



//const filltransactionstempdata (token):


module.exports = {
  getUsers,
  getUserWithEmail,
  addUserWithEmail,
  patchToken,
}