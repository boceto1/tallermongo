const  BRAND = require ('../DB/brand.db');
const  MODEL = require ('../DB/model.db');
const CAR = require('../DB/car.db');

const { cars_Owner_Age_Greater_Than } = require('../VALIDATORS/car.validators')

const postCar = async (req, res) => {
    const car = req.body;
    const nameBrand = car.brand;
    const model = car.model;

    const foundBrand = await  BRAND.findBrandsByName(nameBrand); 

    if(foundBrand.length!==1) {
        res.status(404).json({err:"The brand doesn't exist"});
        return;
    }
    
    car.brand = foundBrand[0]._id;

    const foundModel = await MODEL.findModelByName(model);

    if(foundModel.length!==1){
        res.status(404).json({err:"The model doesn't exist"});
        return;
    }

    car.model = foundModel[0]._id;

    const createdCar = await CAR.createCar(car);

    res.status(200).json({newCar:createdCar});
}

const getAllCars = async (req, res) => {

    const ageGreaterThan = req.query.ageGreaterThan || 0;

    const cars = await CAR.findAllCars();

    const filteredCars = cars_Owner_Age_Greater_Than(ageGreaterThan,cars);

    res.status(200).json({cars:filteredCars});
};

const getCarById = async (req, res) => {

    try {
        const id = req.params.id;
        const foundCar = await CAR.findCarById(id);
        
        if(!foundCar){
            res.status(404).json({err:"The car doesn't exist"});
            return;
        }
        res.status(200).json({car:foundCar});

    } catch (error) {
        res.status(500).json({error});    
    }
};

const changeOwner = async (req, res) => {
    const owner = req.body;
    console.log(owner);
    try {
        const id = req.params.id;
        const foundCar = await CAR.findCarById(id);
        if(!foundCar){
            res.status(404).json({car:foundCar});
            return;
        }
        const changeOwnerCar = await CAR.changeOwnerCar(id, owner);

        res.status(200).json({car:changeOwnerCar});

    } catch (error) {
        res.status(500).json({error});    
    }

};

const getAllCarsByBrands = async (req, res) => {
    const nameBrand = req.params.nameBrand;

    const foundBrand = await  BRAND.findBrandsByName(nameBrand);
    
    console.log(foundBrand);

    if(!foundBrand) {
        res.status(404).json({err:"The brand doesn't exist"});
        return;
    }
    const foundCar = await CAR.findCarByBrand(foundBrand);
    console.log(foundCar);

    res.status(200).json({car:foundCar});
};

const getAllCarsByModels = async (req, res) => {
    const nameModel = req.params.nameModel;

    const foundModel = await MODEL.findModelByName(nameModel);

    if(!foundModel || foundModel.length!==0){
        res.status(404).json({err:"The model doesn't exist"});
        return;
    }

    const foundCar = await CAR.findCarByModel(foundModel);

    res.status(200).json({car:foundCar});

};


module.exports = {
    postCar,
    getAllCars,
    getCarById,
    changeOwner,
    getAllCarsByBrands,
    getAllCarsByModels
};



