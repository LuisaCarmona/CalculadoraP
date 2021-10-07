const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const proyectoSchema = new Schema({
    id_proyecto:{
        type: String, require: [true, 'El nombre del proyecto es obligatorio']},
    cantidad_concentrado:{
        type: Number, require: [true, 'El campo es obligatorio']},
    precio_concentrado:{
        type: Number, require: [true, 'El campo es obligatorio']},
    fecha_tarea:{
        type: Date, default: Date.now}
},{
    collection:'tarea'
});

module.exports= mongoose.model('tarea', proyectoSchema)