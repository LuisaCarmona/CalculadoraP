const proyecto = require('../models/proyecto')

class ProyectoController{
    crear(req, res){
        proyecto.create(req.body, (error, data)=>{
            if (error){
            res.status(500).json({error})
            }else{
            res.status(201).json({
                mensaje: "Proyecto creado correctamente",
                datos: data,
            })
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
    actualizar(req, res){
        let {id, peso_compra, precio_compra, peso_venta, precio_venta, estado} = req.body;
        let obj = {peso_compra, precio_compra, peso_venta, precio_venta, estado}
        proyecto.findByIdAndUpdate(id, {$set: obj}, (error, data)=> {
            if(error){  
            res.status(500).json ({error});
         }else {
             res.status(200).json(data);
         }    
         } );
    }
    eliminar(req, res){
        let { id } = req.body;
         
         proyecto.findByIdAndRemove(id, (error, data) =>{
             if(error){
                 res.status(500).send();
             }else {
                 res.status(200).json(data);
             }
         });      
    }
}

module.exports = ProyectoController;