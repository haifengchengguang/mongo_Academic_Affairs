const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    sid:{type:String},
    name:{type:String},
    sex:{type:String},
    age:{type:Number},
    birthday:{type:String},
    dname:{type:String},
    class:{type:String},

})

module.exports=mongoose.model('Student1',schema,'student1')
