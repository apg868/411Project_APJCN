const getBalance = 'SELECT balance FROM balances WHERE user_id = $1';
const createBalance = "INSERT INTO balances (user_id, balance) VALUES ($1, $2)";
const updateBalance = 'UPDATE balances SET balance = $1 WHERE user_id = $2';


module.exports = {
  getBalance,
  createBalance,
  updateBalance,
}