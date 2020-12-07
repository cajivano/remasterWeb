/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global process, __dirname */

const express = require('express');
//inicializar app
const index = express();

const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const { database } = require ('./keys');

//importar rutas
const clienteRoutes = require('./routes/cliente');


//settings
index.set('port', process.env.PORT || 3000);
index.set('view engine', 'ejs');
index.set('views', path.join(__dirname,'views'));

//middlewares
index.use(morgan('dev'));

//integrado modulo de express - leer datos que vengan del formulario 
//tipos de datos sencillos
index.use(express.json());
index.use(express.urlencoded({extended: false}));

//routes
index.use('/', clienteRoutes);


//archivos estaticos / publico
index.use(express.static(path.join(__dirname,'public')));

//iniciando el servidor
index.listen(index.get('port'), ()=> {
   console.log('Server on port:', index.get('port')); 
}); 






