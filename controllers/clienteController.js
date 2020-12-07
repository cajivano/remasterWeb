/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const controller = {};

const pool = require('../db');



controller.list =(req,res)=>{
   
        const sql = 'SELECT * FROM cliente';
        pool.query(sql,(err, clientes)=> {
            if(err){
              res.json(err);
            }
            res.render('clientes',{
                data: clientes
            });
        });
    
};

controller.save = async (req, res) => {
    
        const sql = 'INSERT INTO cliente SET ?';
        const clienteObj = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        celular: req.body.celular
    };
     await pool.query(sql, clienteObj, err =>{
        if (err) res.send('no funciona');
        res.redirect('/');
               
    });
    
};
controller.edit=(req,res)=>{
        const { id } = req.params;
        const sql = 'SELECT * FROM cliente WHERE id = ?';
        pool.query(sql, [id],(err,cliente) =>{
        res.render('cliente_edit',{
            data: cliente[0]
        });
               
    });
};

controller.update = (req, res) => {
        const { id } = req.params;
        const newClienteObj = req.body;
        const sql = 'UPDATE cliente set ? WHERE id = ?';
        pool.query(sql, [newClienteObj, id],(err,clientes) =>{
        res.redirect('/');
      
               
    });
    
};
controller.delete = (req, res) => {
        const { id } = req.params;
        const sql = 'DELETE FROM cliente WHERE id = ?';
        pool.query(sql, [id],(err,clientes) =>{
            
        res.redirect('/');
        
            
    });
    
};

//proyecto
controller.listproyecto =(req,res)=>{
   
        const sql = 'SELECT * FROM proyecto';
        pool.query(sql,(err, proyectos)=> {
            if(err){
              res.json(err);
            }
            res.render('proyectos',{
                data: proyectos
                
            });
           
        });
    
};
controller.saveproyecto = async (req, res) => {
    
        const sql = 'INSERT INTO proyecto SET ?';
        const proyectoObj = {
        nombreProyecto: req.body.nombreProyecto,
        descripcion: req.body.descripcion,
        cliente_id: req.body.cliente_id
    };
     await pool.query(sql, proyectoObj, err =>{
        if (err) res.send('no funciona');
        res.redirect('/proyectos');
               
    });
    
};

controller.editproyecto =(req,res)=>{
        const { id } = req.params;
        const sql = 'SELECT * FROM proyecto WHERE id = ?';
        pool.query(sql, [id],(err,proyecto) =>{
        res.render('proyecto_edit',{
            data: proyecto[0]
        });
               
    });
};

controller.updateproyecto = (req, res) => {
        const { id } = req.params;
        const newProyectoObj = req.body;
        const sql = 'UPDATE proyecto set ? WHERE id = ?';
        pool.query(sql, [newProyectoObj, id],(err,proyectos) =>{
        res.redirect('/proyectos');
               
    });
    
};
controller.deleteproyecto = (req, res) => {
        const { id } = req.params;
        const sql = 'DELETE FROM proyecto WHERE id = ?';
        pool.query(sql, [id],(err,proyectos) =>{
        res.redirect('/proyectos');
               
    });
    
};


controller.about =(req,res)=>{   
        res.render('about'); 
};

module.exports = controller;


