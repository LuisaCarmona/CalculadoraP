const express = require("express");
// se importa controlador registros
const controladorregistros = require("../controladores/controladorRegistros");

class RutaRegistros{
  constructor(){
     this.ruta = express.Router();
     this.configuracion();
  }

  configuracion(){
     const cRegistros = new controladorregistros.default();
     this.ruta.get("/sign-in", cRegistros.registrar);
  }
}

exports.default = RutaRegistros;