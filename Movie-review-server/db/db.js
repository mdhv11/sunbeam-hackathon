const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'mdhv11',
    password: '5844',
    database: 'movie_db'
})

module.exports = pool