const express = require('express');
const api = express.Router();

const { 
    postCar,
    getAllCars, 
    getCarById, 
    changeOwner, 
    getAllCarsByBrands,
    getAllCarsByModels} = require ('../operations/API/car.api');

api.route('')
    .post(postCar)
    .put(changeOwner)
    .get(getAllCars);


api.route('/:id')
    .get(getCarById)
    
api.route('/brands/:nameBrand')
    .get(getAllCarsByBrands);

api.route('/models/:nameModel')
    .get(getAllCarsByModels);

module.exports = api;