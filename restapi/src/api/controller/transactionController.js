const pool = require('../../../fdb');
const queries = require('../queries/transactionQueries');
const balanceC = require('../controller/balancesController')

// GET

const getAllTransactionsByUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getAllTransactionsByUser, [id], (error, results) => {
    if (error) throw error;
    if (!results.rows.length) {
      return res.status(400).send(`There are no transactions for user_id ${id}.`);
    };
    return res.status(200).json(results.rows);
  });
};

const getUserTransactionByAuthdate = (req, res) => {
  const id = decodeURIComponent(req.query.id);
  const date = decodeURIComponent(req.query.date);

  pool.query(queries.getUserTransactionByAuthdate, [id, date], (error, results) => {
    if (error) throw error;
    if (!results.rows.length) {
      const msg = `There are no transactions for user_id ${id} and auth_datetime ${date}`;
      return res.status(400).send(msg);
    };
    return res.status(200).json(results.rows);
  });
};

const getAllTransactions = (req, res) => {
  pool.query(queries.getAllTransactions, (error, results) => {
    if (error) throw error;
    if (!results.rows.length) {
      const msg = `There are no transactions in the database.`
      return res.status(200).send(msg);
    };
    return res.status(200).json(results.rows);
  })
}


// PUT
const addTransaction = (user_id, amount, datetime, auth_datetime, merchant_name, transaction_name, category) => {
  return new Promise((resolve, reject) => {
    pool.query(queries.addUserTransaction, [user_id, amount, datetime, auth_datetime, merchant_name, transaction_name, category], (error, results) => {
      if (error) reject(error);
	  resolve(results);
    });
  });
};

const addUserTransaction = async (req, res) => {
  try {
    const { user_id, amount, datetime, auth_datetime, merchant_name, transaction_name, category } = req.body;
    await pool.query('BEGIN'); // Start a transaction
    await addTransaction(user_id, amount, datetime, auth_datetime, merchant_name, transaction_name, category);
    await balanceC.updateBalance(user_id, amount);
    await pool.query('COMMIT'); // Commit the transaction upon completion of prior calls
    const msg = `Added transaction of ${amount} to user ${user_id} successfully.`;
    return res.status(201).send(msg);
  } catch (error) {
    await pool.query('ROLLBACK'); // Rollback the transaction if any operation fails
    console.error(error); // Handle errors
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllTransactionsByUser,
  getUserTransactionByAuthdate,
  getAllTransactions,
  addUserTransaction,
}