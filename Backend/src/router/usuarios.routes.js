const express = require ('express');
const UsuarioController = require('../controllers/usuarios.Controller');

class usuarioRoutes{
    constructor(){
        this.router = express.Router();
        this.config();
    }
    config(){
        const usuarioController = new UsuarioController();
        this.router.post('/registro', usuarioController.crear)
        this.router.get('/registro', usuarioController.listar)
        this.router.get('/:email', usuarioController.busquedaPorEmail)
        this.router.get('/login', usuarioController.iniciarSesion)
        this.router.put('/', usuarioController.actualizar)
        this.router.delete('/:id', usuarioController.eliminar)
    }
}
module.exports = usuarioRoutes;