const { Pool } = require('pg');

const URI = process.env.DATABASE_URI;

if (!URI) {
    console.log('DATABASE_URI is not defined in environment variables.');
    process.exit(1);
}

const pool = new Pool({
    connectionString: URI,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
    .then(()=> console.log('Connected to the database'))
    .catch(err => {
        console.log('Error connecting to the database', err.message);
        process.exit(1);
    })

module.exports = pool;