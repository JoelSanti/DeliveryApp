const express = require('express');
const router = express.Router();

const AuthControllerRestaurantes= require('../controllers/Restaurantes/AuthController');
const AuthControllerUsuarios= require('../controllers/Usuarios/AuthController');
const ProductoController = require('../controllers/Productos/ProductoController');

//Restaurantes
router.post     ('/restaurantes/registro', AuthControllerRestaurantes.registro)
router.post     ('/restaurantes/login', AuthControllerRestaurantes.login)

router.put      ('/restaurantes/:id', ProductoController.Update);
router.delete   ('/restaurantes/:id', ProductoController.Delete);

//Usuarios
router.post     ('/usuarios/registro', AuthControllerUsuarios.registro)
router.post     ('/usuarios/login', AuthControllerUsuarios.login)


//Productos
router.get      ('/productos', ProductoController.All)
router.get      ('/productos/:id', ProductoController.Show); 
router.post     ('/productos', ProductoController.Create);
router.put      ('/productos/:id', ProductoController.Update);
router.delete   ('/productos/:id', ProductoController.Delete);

module.exports = router;