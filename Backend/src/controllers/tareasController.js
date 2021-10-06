const tarea = require("../models/tarea");

class TareaController {
  crear(req, res) {
    tarea.create(req.body, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(201).json({
          mensaje: "Tarea creada correctamente",
          datos: data,
        });
      }
    });
  }
  listar(req, res) {
    tarea.find((error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(data);
      }
    });
  }
  actualizar(req, res) {
    let { id, id_proyecto, cantidad_concentrado, precio_concentrado } =
      req.body;
    let obj = { id_proyecto, cantidad_concentrado, precio_concentrado };
    tarea.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(data);
      }
    });
  }
  eliminar(req, res) {
    let { id_proyecto } = req.body;

    proyecto.findByIdAndRemove(id_proyecto, (error, data) => {
      if (error) {
        res.status(500).send();
      } else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports = TareaController;
