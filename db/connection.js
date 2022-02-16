const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'C@RCR][D5x_7Bm#-',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;