/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const router = express.Router();


const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.list);
router.post('/add', clienteController.save);
router.get('/delete/:id', clienteController.delete);
router.get('/update/:id', clienteController.edit);
router.post('/update/:id', clienteController.update);

router.get('/proyectos', clienteController.listproyecto);
router.post('/addproyecto', clienteController.saveproyecto);
router.get('/deleteproyecto/:id', clienteController.deleteproyecto);
router.get('/updateproyecto/:id', clienteController.editproyecto);
router.post('/updateproyecto/:id', clienteController.updateproyecto);

router.get('/about', clienteController.about);



module.exports = router;

