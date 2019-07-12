const express = require('express')
const api = express.Router()

const { } = require ('../operations/API/brand.api');

api.route('')
    .get(getAllBrands);
    .post(createBrand);

api.route('/:id')
    .get(getBrandById);

module.exports = api;