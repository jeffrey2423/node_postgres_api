const {Client } = require('pg');

const connection = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres_node_api',
    password: 'root',
    port: 5432
});

connection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
});

module.exports = connection;