const proyecto = require('../models/proyecto')

class ProyectoController{
    crear(req, res){
        const idProyecto = req.body.idProyecto
        proyecto.create(req.body, (error, data)=>{
            if (error){
            res.status(500).json({error})
        }else{
            if(proyecto.find({idProyecto})){
                res.status(500).json({
                    mensaje: "Proyecto existente"
                })
            }else{
            res.status(201).json({
                mensaje: "Proyecto creado correctamente",
                datos: data,
            })
        }
        }
    })
    }
    listar(req, res){
        proyecto.find((error, data)=>{
            if(error){
                res.status(500).json(
                    {error})
            }else{
                res.status(200).json(data)
            }
        } )
    }    
    iniciarSesion(req, res){
        //Pendiente
    }
    actualizar(req, res){
        let {idProyecto, peso_compra, precio_compra, peso_venta, precio_venta, estado};
        let obj = {peso_compra, precio_compra, peso_venta, precio_venta, estado}
        proyecto.findByIdAndUpdate(idProyecto, {$set: obj}, (error, data)=> {
            if(error){  
            res.status(500).json ({error});
         }else {
             res.status(200).json(data);
         }    
         } );
    }
    eliminar(req, res){
        let { idProyecto } = req.body;
         
         proyecto.findByIdAndRemove(idProyecto, (error, data) =>{
             if(error){
                 res.status(500).send();
             }else {
                 res.status(200).json(data);
             }
         });      
    }
}

module.exports = ProyectoController;