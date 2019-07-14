const express = require('express')
const api = express.Router()

const { getAllModels, postModel, getModelById } = require ('../operations/API/model.api');

api.route('')
    .get(getAllModels)
    .post(postModel);

api.route('/:id')
    .get(getModelById)



module.exports = api;