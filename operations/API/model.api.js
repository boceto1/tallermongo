const { createModel, findModelById, getAllModels}  = require('../DB/model.db');

export const getAllModels = async (req,res) => {
    const models = await getAllModels();
    res.status(200).json(models);
}


export const createModel = async (req,res) => {
    const model = req.body;

    const createdModel = await createModel(model);

    if(!createdModel){
        res.status(500).json({error:"Problems to create model"});
        return;
    }

    res.status(200).json(createModel);
}

export const getModelById = async (req,res) => {
    
    const id = req.params.id;

    const foundModel = await findModelById(id);

    if(!foundModel){
        res.status(404).json({error:"Model not found"});
        return;
    }

    res.status(200).json(foundModel);

}