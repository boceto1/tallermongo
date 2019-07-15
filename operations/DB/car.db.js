const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const createdCar = new CAR(car);
    const resposeCreatedCar = await createdCar.save();
    return resposeCreatedCar;
};

const findAllCars = async () => CAR.find();

const findCarById = async (plate) => CAR.findById(plate);

const findCarByBrand = async (idBrand) => CAR.findById({brand:idBrand});

const findCarByModel = async (idModel) => CAR.findById({brand:idModel});

const changeOwnerCar = async (car) => {
    CAR.updateOne({ plate:car.plate}, {$set: { owner: car.owner}});
}

module.exports = {
    createCar,
    findAllCars,
    findCarById,
    changeOwnerCar,
    findCarByModel,
    findCarByBrand
};