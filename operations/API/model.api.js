const { createModel, findModelById, findAllModels}  = require('../DB/model.db');

const getAllModels= async (req,res) => {

    const foundModels = await findAllModels();
    res.status(200).json(foundModels);
};


const postModel = async (req,res) => {
    const model = req.body;

    const createdModel = await createModel(model);

    if(!createdModel){
        res.status(500).json({error:"Problems to create model"});
        return;
    }

    res.status(200).json(createdModel);
}

const getModelById = async (req,res) => {
    
    const id = req.params.id;

    const foundModel = await findModelById(id);

    if(!foundModel){
        res.status(404).json({error:"Model not found"});
        return;
    }
    res.status(200).json(foundModel);
}


module.exports = {
    getAllModels,
    postModel,
    getModelById
}