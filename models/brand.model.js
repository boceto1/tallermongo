const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema (
  {
    codeBrand:{ type: String, unique: true,required: true },
    name:{type:String, required: true,uppercase: true }
  }
)

module.exports= mongoose.model('BRAND',BrandSchema);