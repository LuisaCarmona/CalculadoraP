const express = require ('express');
const ProyectoController = require('../controllers/proyectoController');

class proyectoRoutes{
    constructor(){
        this.router = express.Router();
        this.config()
    }
    config(){
        const proyecto_Controller = new ProyectoController();
        this.router.post('/', proyecto_Controller.crear)
        this.router.get('/', proyecto_Controller.listar)
        //this.router.post('/login', proyecto_Controller.iniciarSesion)
        this.router.put('/', proyecto_Controller.actualizar)
        this.router.delete('/', proyecto_Controller.eliminar)
    }
}
module.exports = proyectoRoutes;