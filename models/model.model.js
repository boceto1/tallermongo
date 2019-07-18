const mongoose = require('mongoose');
const {Schema} = mongoose;

const ModelSchema = new mongoose.Schema (
  {
    code:{ type: String, unique: true,required: true },
    codeBrand:{ type: String, required:true },
    name:{type:String, required: true,uppercase: true }
  }
)

module.exports= mongoose.model('Model',ModelSchema);