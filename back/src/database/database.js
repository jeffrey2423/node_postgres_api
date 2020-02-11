const {Client } = require('pg');

const connection = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASS,
    port: process.env.PORTBD
});

connection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
});

/*const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    multipleStatements: true
  });
  
  connection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
  });*/

module.exports = connection;