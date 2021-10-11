const usuario = require('../models/usuario')

class UsuarioController {
    crear(req, res) {
        // usuario.findOne({ email: correo }, (error, data) => {
        // if (error) {
        //  res.status(500).json({ error });
        // } else if (data == null) {
        usuario.create(req.body, (err, data) => {
            if (err) {
                res.status(500).json({
                    err
                });
            } else {
                res.status(201).json({
                    mensaje: "usuario creado correctamente",
                    data,
                });
            }
        });
        //    }
        ///});
    }
    busquedaPorEmail(req, res) {
        const correo = req.params.email;
        usuario.findOne({
            email: correo
        }, (error, data) => {
            if (error) {
                res.status(500).json({
                    error
                });
            } else if (data == null) {
                res.status(200).json({
                    existe: false
                })
            } else {
                res.status(200).json({
                    existe: true
                })
            }
        })
    }
    listar(req, res) {
        usuario.find((error, data) => {
            if (error) {
                res.status(500).json({
                    error
                });
            } else {
                res.status(200).json(data);
            }
        });
    }
    actualizar(req, res) {
        let {
            id,
            nombre,
            email,
            contrasena
        } = req.body;
        let obj = {
            nombre,
            email,
            contrasena
        };
        usuario.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data) => {
            if (error) {
                res.status(500).json({
                    error
                });
            } else {
                res.status(200).json(data);
            }
        });
    }

    eliminar(req, res) {
        let {
            id
        } = req.params;

        usuario.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res
                    .status(200)
                    .json(data, (mensaje = "usuario eliminado correctamente"));
            }
        });
    }
    iniciarSesion(req, res) {
        let e = req.body.email;
        let c = req.body.contrasena;
        usuario.findOne({
            email: e,
        }, (error, data) => {
            if (error) {
                res.status(500).json({
                    mensaje: "Error al iniciar sesión",
                });
            } else if (data == null) {
                res.status(202).json({
                    login: false,
                    mensaje: "Usuario no registrado",
                });
            } else {
                if(c === data.contrasena){
                    res.status(200).json({
                        login: true,
                        data,
                    });
                }else{
                    res.status(201).json({
                        login: false,
                        mensaje: "Contraseña incorrecta",
                    });
                }
                
            }
        });
    }
}

module.exports = UsuarioController;