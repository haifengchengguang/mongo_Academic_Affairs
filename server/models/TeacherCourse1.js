const mongoose=require("mongoose")

const schema=new mongoose.Schema({
    tid:{type:String},
    cid:{type:String},

})

module.exports=mongoose.model('TeacherCourse1',schema,'teacher_course1')
