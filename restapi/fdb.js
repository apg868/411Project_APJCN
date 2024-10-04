// using 'pg' library for PostgreSQL interaction
const Pool = require('pg').Pool;
require('dotenv').config();

// pool provides a way to maintain open connection with
// db instead of tearing down and rebuildling connection
// repeatedly
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// export the pool
module.exports = pool;