//importar express
const express = require("express");
const rutaRegistros = require("./rutas/rutaRegistros")

class Servidor{
  //Constructor
  constructor(){
    // se crea objeto express
    this.app = express();
    // Indicar el puerto por el que se monta el servidor
    this.app.set("port", process.env.PORT || 3000);
    // se manejarán solicitudes en json
    this.app.use(express.json());
    // crear ruta de inicio
    const ruta = express.Router();
    ruta.get("/", (request, response) => {
       response.status(200).json({mensaje: "conexión exitosa"});
    });
    //se añade la ruta de los registros al servidor
    const rRegistros = new rutaRegistros.default();
    this.app.use(rRegistros.ruta);
    
    // se añade la ruta creada al servidor
    this.app.use(ruta);
    // se pone el servidor a la escucha por el puerto habilitado
    this.app.listen( this.app.get("port"), ()=>{
      console.log("servidor corriendo sobre el puerto ",this.app.get("port"));
    });
  }
  
}

// se crea objeto de tipo Servidor
const servidor = new Servidor();