const BRAND = require('../../models/brand.model');


const createBrand = async (brand) => {
    const createdBrand = new BRAND(brand);
    const resposeCreatedBrand = await createdBrand.save();
    return resposeCreatedBrand;
};

const findBrandById = async (id) => BRAND.findById(id);

const findBrandsByName = async (name) => BRAND.find({name});

const findAllBrands = async () => BRAND.find();

module.exports = {
    createBrand,
    findBrandById,
    findBrandsByName,
    findAllBrands
}