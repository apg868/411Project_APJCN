// using 'pg' library for PostgreSQL interaction
const Pool = require('pg').Pool;

// pool provides a way to maintain open connection with
// db instead of tearing down and rebuildling connection
// repeatedly
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "finances",
  password: "CDN2!",
  port: 5432
});

// export the pool
module.exports = pool;