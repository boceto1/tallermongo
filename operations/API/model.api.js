const { createModel, findModelByCode , findAllModels}  = require('../DB/model.db');
const { findBrandByCode } = require('../DB/brand.db');

const getAllModels= async (req,res) => {

    const foundModels = await findAllModels();
    res.status(200).json(foundModels);
};


const postModel = async (req,res) => {
    const model = req.body;
    const idBrand = model.codeBrand;

    try {
        const foundBrand = await findBrandByCode(idBrand);

        if(!foundBrand || foundBrand.length!==1){
            res.status(404).json({error:"Brand not exist"});
            return;
        }

        const createdModel = await createModel(model);

        if(!createdModel){
            res.status(500).json({error:"Problems to create model"});
            return;
        }

        res.status(200).json(createdModel);


    } catch (error) {
        res.status(400).json({error});
    }
        
}

const getModelById = async (req,res) => {
    
    const id = req.params.id;

    const foundModel = await findModelByCode(id);

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