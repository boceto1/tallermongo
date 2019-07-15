const express = require('express');
const api = express.Router();

const { 
    postCar,
    getAllCars, 
    getBrandById, 
    changeOwner, 
    getAllCarsByBrands,
    getAllCarsByModels} = require ('../operations/API/car.api');

api.route('')
    .post(postCar)
    .get(getAllCars);

api.route('/:id')
    .get(getBrandById)
    .put(changeOwner);


api.route('/brands/:nameBrand')
    .get(getAllCarsByBrands);

api.route('/models/:nameModel')
    .get(getAllCarsByModels);

module.exports = api;