require('dotenv').config();
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const poolInterface = new Object()

poolInterface.pg_pool = pool

poolInterface.select_jugadores = function () {
    return poolInterface.pg_pool.query('SELECT * FROM jugadores')
        .then(res => res.rows)
        .catch(err => {
            console.log('Error executing query', err.stack)
            return []
        })
}

module.exports = poolInterface