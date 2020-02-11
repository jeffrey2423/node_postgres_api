const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config()
const app = express();

//SETTINGS
app.set('port', process.env.PORTSERVER ||  4000);


//MIDDLEWARES
//se le dice al servidor que debe entender json
//enviar en este caso o entender
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//ROUTES
//especificamos las urls que la aplicacion de react
//podra acceder

app.use('/api/user', require('./routes/user'));
//app.use('/api/users/auth', require('./routes/auth'));

module.exports = app;