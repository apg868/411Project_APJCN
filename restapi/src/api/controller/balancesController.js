const pool = require('../../../fdb');
const queries = require('../queries/balanceQueries');

// Create an empty balance
const createBalance = (user_id, amount) => {
  return new Promise((resolve, reject) => {
    // Insert a new balance record with initial amount for the user
    pool.query(queries.createBalance, [user_id, amount], (error, results) => {
      if (error) reject(error);
      resolve();
    });
  });
};

const getBalance = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query(queries.getBalance, [user_id], async (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.rows.length === 0) {
          try {
            await createBalance(user_id, 0);
            resolve(0); // Resolve with initial balance 0
          } catch (error) {
            reject(error); // Reject if error occurs during creation
          }
        } else {
          resolve(results.rows[0].balance); // Resolve with retrieved balance
        }
      }
    });
  });
};

const updateBalance = async (user_id, amount) => {
  try {
    const oldBalance = await getBalance(user_id);
    const balance = parseFloat(oldBalance) + parseFloat(amount);
    await pool.query(queries.updateBalance, [balance, user_id]);
    return balance; // Resolve with the updated balance
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateBalance
};
