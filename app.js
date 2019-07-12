const bodyParser= require('body-parser');
const express= require('express');
const morgan= require('morgan');


const app= express()

const apiModel = require('./routes/model');
const apiBrand = require('./routes/brand');
const apiCar = require('./routes/car');


//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/brands',apiBrand)
app.use('/models',apiModel)
app.use('/cars',apiCar)

//test
app.get('/',(req,res)=>{
    console.log("Servicio levantado")
    res.status(200).send({message:"Up Service"})
})

module.exports = app