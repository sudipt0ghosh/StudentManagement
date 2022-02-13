const sql = require('mysql2');
const config = require('../config/config.json');

const pool = sql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

module.exports = pool.promise();
