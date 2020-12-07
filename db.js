/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const mysql = require('mysql');
const { database }= require('./keys');
const pool = mysql.createPool(database);
const { promisify } = require('util');

pool.getConnection((err, conn)=>{
    if (err) {
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXIÓN DE LA BASE DE DATOS FUE CERRADA');
        }
        if (err.code == 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if (err.code == 'ECONNREFUSED') {
            console.error('LA CONEXIÓN DE LA BASE DE DATOS FUE RECHAZADA');
        }
    } 
    if (conn) conn.release(); 
        console.log('DB esta conectada');
        return;
    
});

pool.query = promisify(pool.query);
module.exports = pool;


