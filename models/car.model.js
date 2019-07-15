const mongoose = require('mongoose');
const {Schema} = mongoose;

const OwnerSchema = new mongoose.Schema ({
    dni:{type: String},
    name:{type: String},
    date:{type: Date}
}); 

const CarSchema = new mongoose.Schema (
  {
    plate:{ type: String, unique: true,required: true },
    brand:{ type: Schema.Types.ObjectId, ref: 'Brand'},
    model:{ type: Schema.Types.ObjectId, ref: 'Model'},
    year: {type: Number},
    transmition: {type: String, enum:['MAN','AUT']},
    owner: {type: OwnerSchema}
}
);

module.exports= mongoose.model('CAR',CarSchema);