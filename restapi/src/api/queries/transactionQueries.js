// GET
const getAllTransactionsByUser = "SELECT * FROM transactions WHERE user_id = $1";
const getUserTransactionByAuthdate = "SELECT * FROM transactions WHERE user_id = $1 AND auth_datetime = $2";
const getAllTransactions = "SELECT * FROM transactions";
// PUT
const addUserTransaction = "INSERT INTO transactions (user_id, amount, datetime, auth_datetime, merchant_name, transaction_name, category) VALUES ($1, $2, $3, $4, $5, $6, $7)";

// POST

// DELETE

module.exports = {
  getAllTransactionsByUser,
  getUserTransactionByAuthdate,
  getAllTransactions,
  addUserTransaction,
}
