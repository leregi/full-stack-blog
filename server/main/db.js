const { Pool } =  require('pg');

const pool = Pool({
   user: 'zeta',
   host: 'localhost',
   database: 'mydb',
   port: 4532
});


module.exports = pool;
