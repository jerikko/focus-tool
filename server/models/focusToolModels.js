const { Pool } = require('pg');

const PG_URI = 'postgres://tefzgjxc:yhDfWXTVrsiRvjsFTzt0TV9Y0yFUKnHh@heffalump.db.elephantsql.com/tefzgjxc';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};