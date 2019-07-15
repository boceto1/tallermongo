const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const createdCar = new CAR(car);
    const resposeCreatedCar = await createdCar.save();
    return resposeCreatedCar;
};

const findAllCars = async () => CAR.find();

const findCarByBrand = async (idBrand) => CAR.findById({brand:idBrand});

module.exports = {
    createCar,
    findAllCars,
    findCarByBrand
};