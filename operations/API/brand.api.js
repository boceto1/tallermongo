const {createBrand, findAllBrands, findBrandByCode } = require('../DB/brand.db');

const getAllBrands = async (req, res) => {
    try {
        const foundAllBrands = await findAllBrands();
        res.status(200).json({brands:foundAllBrands});
    } catch (error) {
        res.status(500).json({error});
    }
};

const postBrand = async (req, res) => {
    try {
        const brand = req.body;
        const createdBrand = await createBrand(brand);
        res.status(200).json({newBrand:createdBrand});
    } catch (error) {
        res.status(400).json({error});    
    }
};

const getBrandById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundBrand = await findBrandByCode(id);
        
        if(!foundBrand || foundBrand.length!==1){
            res.status(404).json({error:"Brand not found"});
            return;
        }
        res.status(200).json({brand:foundBrand[0]});
    } catch (error) {
        res.status(500).json({error});    
    }
};

module.exports = {
    postBrand,
    getAllBrands,
    getBrandById
}
