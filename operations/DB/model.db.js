const MODEL = require('../../models/model.model');


const createModel = async (model) => {
    const createdModel = new MODEL(model);
    const resposeCreateModel = await createdModel.save();
    return resposeCreateModel;
};

const findModelById = async (id) => MODEL.findById(id);

const findModelByCode = async (code) => MODEL.findOne({code});

const findModelByName = async (name) => MODEL.find({name}); 

const findAllModels = async () => MODEL.find();

module.exports = {
    createModel,
    findModelById,
    findModelByName,
    findAllModels,
    findModelByCode
}