// GET
const getUserWithEmail = "SELECT * FROM master WHERE email = $1";
const getUsers = "SELECT * FROM master";

// PUT
const addUserWithEmail = "INSERT INTO master (email, p_token) VALUES ($1, $2)";

// PATCH
const updatePToken= "UPDATE master SET p_token = $2 WHERE email = $1";

module.exports = {
  addUserWithEmail,
  getUserWithEmail,
  getUsers,
  updatePToken,
}