const {createBrand, findAllBrands, findBrandById } = require('../DB/brand.db');

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
        res.status(500).json({error});    
    }
};

const getBrandById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundBrand = await findBrandById(id);
        
        if(!foundBrand){
            res.status(404).json({bran:foundBrand});
            return;
        }
        res.status(200).json({brand:foundBrand});

    } catch (error) {
        res.status(500).json({error});    
    }
};

module.exports = {
    postBrand,
    getAllBrands,
    getBrandById
}
