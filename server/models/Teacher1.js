const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    tid:{type:String},
    name:{type:String},
    sex:{type:String},
    age:{type:Number},
    dname:{type:String},
})

module.exports=mongoose.model('Teacher1',schema,'teacher1')
