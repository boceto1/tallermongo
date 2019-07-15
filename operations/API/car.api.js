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
        const plate = req.body.plate;
        const foundCar = await CAR.findCarById(plate);
        
        if(!foundCar){
            res.status(404).json({car:foundCar});
            return;
        }
        res.status(200).json({car:foundCar});

    } catch (error) {
        res.status(500).json({error});    
    }
};

const changeOwner = async (req, res) => {
    const car = req.body;
    try {
        const plate = req.params.plate;
        const foundCar = await CAR.findCarById(plate);
        if(!foundCar){
            res.status(404).json({car:foundCar});
            return;
        }
        const changeOwnerCar = await CAR.changeOwnerCar(car);
        res.status(200).json({car:changeOwnerCar});

    } catch (error) {
        res.status(500).json({error});    
    }

};

const getAllCarsByBrands = async (req, res) => {
    const nameBrand = req.params.nameBrand;

    const foundBrand = await  BRAND.findBrandsByName(nameBrand); 

    if(!foundBrand) {
        res.status(404).json({err:"The brand doesn't exist"});
        return;
    }

    const foundCar = await CAR.findCarByBrand(nameBrand);

    res.status(200).json({car:foundCar});
};

const getAllCarsByModels = async (req, res) => {
    const nameModel = req.params.nameModel;

    const foundModel = await MODEL.findModelByName(nameModel);

    if(!foundModel){
        res.status(404).json({err:"The model doesn't exist"});
        return;
    }

    const foundCar = await CAR.findCarByModel(nameModel);

    res.status(200).json({car:foundCar});

    res.send("Works well");
};


module.exports = {
    postCar,
    getAllCars,
    getCarById,
    changeOwner,
    getAllCarsByBrands,
    getAllCarsByModels
};

