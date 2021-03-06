const CAR = require('../../models/car.model');


const createCar = async (car) => {
    const createdCar = new CAR(car);
    const resposeCreatedCar = await createdCar.save();
    return resposeCreatedCar;
};

const findAllCars = async () => CAR.find();

const findCarById = async (id) => CAR.findById(id);

const findCarByBrand = async (foundBrand) => CAR.find({brand:foundBrand});

const findCarByModel = async (foundModel) => CAR.find({model:foundModel});

const findCarByPlate = async (plate) => CAR.findOne({plate});

const changeOwnerCar = async (id,car) => CAR.findByIdAndUpdate(id,car, {new: true});;

module.exports = {
    createCar,
    findAllCars,
    findCarById,
    changeOwnerCar,
    findCarByModel,
    findCarByBrand,
    findCarByPlate
};