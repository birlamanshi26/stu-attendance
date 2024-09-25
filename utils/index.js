// utils/index.js

const mysql = require('mysql2');

// Create a connection to your local MySQL database
const connection = mysql.createConnection({
  host: 'localhost',          // Localhost for your local MySQL server
  user: 'your_username',       // Your MySQL username
  password: 'your_password',   // Your MySQL password
  database: 'your_database_name', // The database you created locally
  port: 3306                   // Default port for MySQL
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

// Export the connection so you can use it in other parts of the project
module.exports = connection;
