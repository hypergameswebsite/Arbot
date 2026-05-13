let mysql = require('mysql');

let con = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "USER",
  password: "PASSWORD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
