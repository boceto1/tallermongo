const express = require('express');
const api = express.Router();

const { } = require ('../operations/API/car.api');

api.route('')
    .get(getAllCars)

api.route('/:id')
    .get(getBrandById)
    .put(changeOwner);


api.route('/brands/:nameBrand')
    .get(getAllCars);

api.route('/models/:nameModel')
    .get(getAllCars);



module.exports = api;