const { Pool } = require('pg');

// Opret en databasepool
const pool = new Pool({
  user: 'bssuxilu',
  host: 'horton.db.elephantsql.com',
  database: 'bssuxilu',
  password: 'OQ1PJt6-3Ici0A7nQkyMse5pNI2p7QXz',
  port: 5432,
});

// Hent data fra databasen og print det til konsollen
pool.query('SELECT * FROM electricity_rates', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  pool.end();
});