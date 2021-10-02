const tarea = require('../models/tarea')

class TareaController{
    crear(req, res){
        tarea.create(req.body)
    }
    listar(req, res){

    }
    actualizar(req, res){
        
    }
    eliminar(req, res){
        
    }
}

module.exports = TareaController;