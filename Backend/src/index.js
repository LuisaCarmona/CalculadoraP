//importar express
const express = require("express");
const dbConnection = require("./database/dbConnection");
const rutaUsuario = require("./router/usuarios.routes");
const proyectoRoutes = require("./router/proyectos.routes");
const tareasRoutes = require("./router/tareas.routes");
const cors = require('cors');

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
        // indicar conexiones de origen cruzado
        this.app.use(cors(
          {
            origin:"*",
            methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
          }
        ));
        // crear ruta de inicio
        const ruta = express.Router();
        ruta.get("/", (request, response) => {
           response.status(200).json({mensaje: "conexión exitosa"});
        });
        // crear rutas
        const r_usuario = new rutaUsuario();
        const r_proyectos = new proyectoRoutes();
        const r_tareas = new tareasRoutes();

        // se añaden rutas
        this.app.use(ruta);
        this.app.use(r_usuario.router);
        this.app.use(r_proyectos.router);
        this.app.use(r_tareas.router);

        // se pone el servidor a la escucha por el puerto habilitado
        this.app.listen( this.app.get("port"), ()=>{
          console.log("servidor corriendo sobre el puerto ",this.app.get("port"));
        });
  }
  
}

// se crea objeto de tipo Servidor
const servidor = new Servidor();