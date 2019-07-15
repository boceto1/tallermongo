const moment = require('moment');


const isAgeGreaterThan = (car,years)=> {
    owner = car.owner;
    const ageOwner = moment().diff(owner.date, 'years');
    return ageOwner >= years;
}

const cars_Owner_Age_Greater_Than = (age,cars) => 
                                        cars.filter(car => isAgeGreaterThan(car,age)); 

module.exports = {
    cars_Owner_Age_Greater_Than
}