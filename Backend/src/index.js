//importar express
const express = require("express");
const dbConnection = require("./database/dbConnection");
const rutaUsuario = require("./router/usuarios.routes");
const cors  = require("cors")

class Servidor{
  //Constructor
  constructor(){
    const dbCont = new dbConnection();
    // Aplicación express para montar el servidor
    this.app = express();
    this.confic();
  }

  confic(){
    this.app.use(cors());
        // Indicar el puerto por el que se monta el servidor
        this.app.set("port", process.env.PORT || 3000);
        // se manejarán solicitudes en json
        this.app.use(express.json());
        // crear ruta de inicio
        const ruta = express.Router();
        ruta.get("/", (request, response) => {
           response.status(200).json({mensaje: "conexión exitosa"});
        });
        const r_usuario = new rutaUsuario();
        // se añade la ruta creada al servidor
        this.app.use(ruta);
        this.app.use("/usuario", r_usuario.router);
        // se pone el servidor a la escucha por el puerto habilitado
        this.app.listen( this.app.get("port"), ()=>{
          console.log("servidor corriendo sobre el puerto ",this.app.get("port"));
        });
  }
  
}

// se crea objeto de tipo Servidor
const servidor = new Servidor();