const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const createdCar = new CAR(car);
    const resposeCreatedCar = await createdCar.save();
    return resposeCreatedCar;
};

const findAllCars = async () => CAR.find();

const findCarById = async (idCar) => CAR.findById({id:idCar});

const findCarByBrand = async (idBrand) => CAR.find({brand:idBrand});

const findCarByModel = async (idModel) => CAR.find({brand:idModel});

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