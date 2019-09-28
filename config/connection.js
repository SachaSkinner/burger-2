// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

var connection = mysql.createConnection({
  host: "v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gu3cos49osnbvmru",
  password: "cjebxldmg14d6ppn",
  database: "nayqinjgbpanq4qy"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;