const express = require('express')
const api = express.Router()

const { getAllBrands, postBrand, getBrandById } = require ('../operations/API/brand.api');

api.route('')
    .get(getAllBrands)
    .post(postBrand);

api.route('/:id')
    .get(getBrandById);

module.exports = api;