const moment = require('moment');


const isAgeGreaterThan = (car,years)=> {
    owner = car.owner;
    const date = new Date(owner.birthdate)
    console.log(date);
    const ageOwner = moment().diff(date, 'years');
    return ageOwner >= years;
}

const cars_Owner_Age_Greater_Than = (age,cars) => 
                                        cars.filter(car => isAgeGreaterThan(car,age)); 


const validateFormatDate = (date) => {
    const formatDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    return formatDate.test(date);

}

const validateInputs = (car)=> new Promise((resolve, reject) => {
    const validateName = (car.plate).length <= 7;
    const validateYear = car.year >= 1980 && car.year<=2019;
    const validateEngine = car.engine >= 1000 && car.engine<=9999
    resolve(validateName && validateYear && validateEngine && validateFormatDate(car.owner.birthdate));
  });

module.exports = {
    cars_Owner_Age_Greater_Than,
    validateInputs
}