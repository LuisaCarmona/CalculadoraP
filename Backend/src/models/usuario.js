const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        require: [true, 'El email es obligatorio']
    },
    contrasena:{
        type: String,
        require: [true, 'La contraseña es obligatoria']
    }
},{
    collection:'usuarios'
});

module.exports= mongoose.model('usuario', usuarioSchema)