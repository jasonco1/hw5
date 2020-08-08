const mysql = require('mysql');

const pool = mysql.createPool({
    //parameters
    //you must use your own database hostname, username, etc. parameters here
    connectionLimit: 10,
    host: "nr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "nzrc2lba8yes09lj",
    password: "h1w9cdtiqhayumcm",
    database: "nb0sv5ann1m2yc1k"
    
});//database pool connection 

module.exports = pool;
