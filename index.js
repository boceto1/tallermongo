const mongoose = require('mongoose')
const app = require('./app')
const {db,port} = require('./config')

mongoose.connect(db,{ useNewUrlParser: true },(err,res)=>{
    try{
        if (err) throw err
        console.log('Conexion establecida...')
    
        app.listen(port, ()=>{
            console.log(`Corriendo en el puerto: ${port}`)
        }
    )
    }catch{
        console.log("Error");
    }
})