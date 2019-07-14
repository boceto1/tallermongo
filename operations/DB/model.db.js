const MODEL = require('../../models/model.model');


const createModel = async (model) => {
    const createdModel = new MODEL(model);
    const resposeCreateModel = await createdModel.save();
    return resposeCreateModel;
};

const findModelById = async (id)=> MODEL.findById(id);

const findAllModels = async () => MODEL.find();

module.exports = {
    createModel,
    findModelById,
    findAllModels
}