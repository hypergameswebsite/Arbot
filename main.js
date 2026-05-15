let mysql = require('mysql');

let con = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "USER",
  password: "PASSWORD",
  trustServerCertificate: "true"
});

function run_login() {
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  con.connect(function(err) {
    if (err) throw err;
    let sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        alert("Login successful!");
        window.location.href = "loggedin.html";
        
      } else {
        alert("Invalid username or password.");
      }
    });
} );};

function run_register() {
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  con.connect(function(err) {
    if (err) throw err;
    let sql = `INSERT INTO users (username, password, info_positives, info_negatives, info_house_points) VALUES ('${username}', '${password}', ${info_positives}, ${info_negatives}, ${info_house_points})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      alert("Registration successful!");
    });
  });
};                  