const MODEL = require('../../models/model');


export const createModel = async (model) => {
    const createdModel = new MODEL(model);
    const resposeCreateModel = await createdModel.save();
    return resposeCreateModel;
};

export const findModelById = async (id)=> MODEL.findById(id);

export const getAllModels = async () => MODEL.find();
