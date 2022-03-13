let mysql = require('mysql');
let conn2users = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "nodejs_crud_db"
})

conn2users.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected OrderLists...');
    }
})

module.exports = conn2users;