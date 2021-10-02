const usuario = require('../models/usuario')

class UsuarioController{
    crear(req, res){
        const email = req.body.email
        usuario.create(req.body, (error, data)=>{
            if (error){
            res.status(500).json({error})
        }else{
            if(usuario.find({email})){
                res.status(500).json({
                    mensaje: "Usuario existente"
                })
            }else{
            res.status(201).json({
                mensaje: "usuario creado correctamente",
                datos: data,
            })
        }
        }
    })
}
    listar(req, res){
        usuario.find((error, data)=>{
            if(error){
                res.status(500).json(
                    {error})
            }else{
                res.status(200).json(data)
            }
        } )
    }
    actualizar(req, res){
        
    }
    eliminar(req, res){
        
    }
    iniciarSesion(req, res){
        const email = req.body.email
        const contrasena = req.body.contrasena
        usuario.find({email: email}, (error, data)=>{
            if(error){
                res.status(404).json({
                    mensaje: "Usuario no registrado"
                })
            }else{
                if (contrasena === data.contrasena){
                    res.status(200).json({
                        login: true,
                        contrasena: contra,
                        data
                    })
                }else{
                    res.status(406).json({
                        login: false,
                        contrasena: contra,
                        data
                    })
                }
            }
        }) 
    }
}

module.exports = UsuarioController;
