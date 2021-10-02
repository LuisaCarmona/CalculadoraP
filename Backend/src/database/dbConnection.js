const mongoose = require ('mongoose')
const database = require('./urlDatabase')

class dbConnection{
    constructor(){
        mongoose.connect(database.db).then(()=>{
            console.log("conexion a la base de datos")}).catch(err => {
                console.log("ocurrio un error", err)
            })
    }
}

module.exports = dbConnection