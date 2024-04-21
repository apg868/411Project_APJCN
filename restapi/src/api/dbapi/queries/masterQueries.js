// GET
const getUserWithEmail = "SELECT * FROM master WHERE email = $1";
const getUsers = "SELECT * FROM master";

// PUT
const addUserWithEmail = "INSERT INTO master (email, p_token) VALUES ($1, $2)";

module.exports = {
  addUserWithEmail,
  getUserWithEmail,
  getUsers,
}