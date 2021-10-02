const proyecto = require('../models/proyecto')

class ProyectoController{
    crear(req, res){
        proyecto.create(req.body)
    }
    listar(req, res){

    }    
    iniciarSesion(req, res){

    }
    actualizar(req, res){
        
    }
    eliminar(req, res){
        
    }
}

module.exports = ProyectoController;