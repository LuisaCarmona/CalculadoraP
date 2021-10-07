const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const proyectoSchema = new Schema({
    id_usuario:{
        type: String, require: [true, 'El nombre es obligatorio']
    },
    peso_compra:{
        type: String, require: [true, 'El peso es obligatorio']
    },
    precio_compra:{
        type: Number, require: [true, 'El precio es obligatorio']
    },
    nombre_proyecto:{
        type: String, require: [true, 'El nombre del proyecto es obligatorio']
    },
    fecha_creación:{
        type: Date, default: Date.now
    },
    peso_venta:{type: String},
    precio_venta:{type: Number},
    estado:{type: Boolean},
},{
    collection:'proyecto'
});

module.exports= mongoose.model('proyecto', proyectoSchema)