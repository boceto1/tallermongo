const mongoose = require('mongoose');
const {Schema} = mongoose;

const OwnerSchema = new mongoose.Schema ({
    dni:{type: String, required:true},
    name:{type: String, required:true},
    birthdate:{type: String}
}); 

const CarSchema = new mongoose.Schema (
  {
    plate:{ type: String, unique: true,required: true },
    brand:{ type: Schema.Types.ObjectId, ref: 'Brand'},
    model:{ type: Schema.Types.ObjectId, ref: 'Model'},
    year: {type: Number, required: true},
    engine:{type:Number, required: true },
    transmition: {type: String, enum:['MAN','AUT']},
    owner: {type: OwnerSchema, required:true}
}
);

module.exports= mongoose.model('CAR',CarSchema);