const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodeprojectserver',
    password: 'RITIK99nakra@'
});

module.exports = pool.promise();