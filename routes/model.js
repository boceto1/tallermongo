const express = require('express')
const api = express.Router()

const { getAllModels,getModelById,createModel } = require ('../operations/API/model.api');

api.route('')
    .get(getAllModels)
    .post(createModel);

api.route('/:id')
    .get(getModelById);

module.exports = api;