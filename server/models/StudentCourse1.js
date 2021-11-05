const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    sid:{type:String},
    cid:{type:String},
    score:{type:String},
    tid:{type:String}

})

module.exports=mongoose.model('StudentCourse1',schema,'student_course1')
