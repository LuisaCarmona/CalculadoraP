const express = require("express");

class ControladorRegistros{
   constructor(){
    this.ruta = express.Router();

   }
   
   registrar(req, res){
     console.log("petición exitosa");
     res.status(200).json({mensaje: "registro exitoso"});

   }
}

exports.default = ControladorRegistros;