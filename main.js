let mysql = require('mysql');

let con = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8826326",
  password: "xWeTCJRnyl"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});