const express = require ('express');
const UsuarioController = require('../controllers/usuarios.Controller');

class usuarioRoutes{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    config(){
        const usuarioController = new UsuarioController();
        this.router.post('/usuario', usuarioController.crear)
        this.router.get('/usuario', usuarioController.listar)
        this.router.get('/:email', usuarioController.busquedaPorEmail)
        this.router.post('/usuario/login', usuarioController.iniciarSesion)
        this.router.put('/', usuarioController.actualizar)
        this.router.delete('/usuario/:id', usuarioController.eliminar)
    }
}
module.exports = usuarioRoutes;