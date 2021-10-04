const express = require ('express');
const UsuarioController = require('../controllers/usuarios.Controller');

class usuarioRoutes{
    constructor(){
        this.router = express.Router();
        this.config()
    }
    config(){
        const usuarioController = new UsuarioController();
        this.router.post('/', usuarioController.crear)
        this.router.get('/', usuarioController.listar)
        this.router.post('/login', usuarioController.iniciarSesion)
        this.router.put('/', usuarioController.actualizar)
        this.router.delete('/', usuarioController.eliminar)
    }
}
module.exports = usuarioRoutes;