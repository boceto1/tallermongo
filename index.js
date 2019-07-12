const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config/db-connection')

mongoose.connect(config.dbjean,(err,res)=>{
    if (err) throw err

    console.log('Conexion establecida...')

    app.listen(config.port, ()=>{
        console.log(`Corriendo en el puerto: ${config.port}`)
    })
})