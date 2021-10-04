const express = require ('express');
const TareasController = require('../controllers/tareasController');

class tareasRoutes{
    constructor(){
        this.router = express.Router();
        this.config()
    }
    config(){
        const tareas_Controller = new TareasController();
        this.router.post('/', tareas_Controller.crear)
        this.router.get('/', tareas_Controller.listar)
        this.router.put('/', tareas_Controller.actualizar) 
        this.router.delete('/', tareas_Controller.eliminar)
    }
    }

module.exports = tareasRoutes;