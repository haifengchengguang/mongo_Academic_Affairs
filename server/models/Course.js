const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    cid:{type:String},
    name:{type:String},
    fcid:{type:String},
    credit:{type:Number},

})

module.exports=mongoose.model('Course',schema)
