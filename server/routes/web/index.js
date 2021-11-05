module.exports=app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require("../../models/Category")
    const Student=require("../../models/Student")
    const Astronomy=require("../../models/Astronomy")
    const Course=require("../../models/Course")
    const Teacher=require("../../models/Teacher")
    const StudentCourse=require("../../models/StudentCourse")
    const StudentCourse1=require("../../models/StudentCourse1")
    const Course1=require("../../models/Course1")
    const Student1=require("../../models/Student1")
    router.get('/categories',async(req,res)=>{
        const items= await Category.find().limit(10)
        res.send(items)
    })
    router.get('/studentcourse/:id',async(req,res)=>{
        const items= await Student.findById(req.params.id)
        const items1= await StudentCourse.find().where({sid:items.sid})
        res.send(items1)
    })
    router.post('/student',async(req,res)=>{
        // const Model=require(`../../models/${req.params.resource}`)
        const model= await Student.create(req.body)
        res.send(model)
    })
    router.post('/selectcourse',async(req,res)=>{
        // const Model=require(`../../models/${req.params.resource}`)
        const model= await StudentCourse.create(req.body)
        res.send(model)
    })
    router.put('/student/:id',async(req,res)=>{
        const model= await Student.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.put('/course/:id',async(req,res)=>{
        const model= await Course.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.put('/teacher/:id',async(req,res)=>{
        const model= await Teacher.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.post('/teacher',async(req,res)=>{
        // const Model=require(`../../models/${req.params.resource}`)
        const model= await Teacher.create(req.body)
        res.send(model)
    })
    router.post('/course',async(req,res)=>{
        // const Model=require(`../../models/${req.params.resource}`)
        const model= await Course.create(req.body)
        res.send(model)
    })
    router.get('/student',async(req,res)=>{
        const items= await Student.find()
        res.send(items)
    })
    router.get('/studentageless20',async(req,res)=>{
        const items= await Student.find().where({age:{$lt: 20}})
            //.where('age').lt(20)
        res.send(items)
    })
    router.get('/studentagedname',async(req,res)=>{
        const items= await Student.find().where({age:{$lt: 20},dname:'SC'})
        //.where('age').lt(20)
        res.send(items)
    })
    router.get('/course',async(req,res)=>{
        const items= await Course.find()
        res.send(items)
    })
    router.get('/coursefcid',async(req,res)=>{
        const items= await Course.find().where({fcid:'300001'})
        res.send(items)
    })
    router.get('/teacherage',async(req,res)=>{
        const items= await Teacher.find().where({age:{$gt:50}})
        res.send(items)
    })
    router.get('/teacher',async(req,res)=>{
        const items= await Teacher.find()
        res.send(items)
    })
    router.get('/teachersex',async(req,res)=>{
        const items= await Teacher.find().where({sex:'M'})
        res.send(items)
    })
    router.get('/teacherdname',async(req,res)=>{
        const items= await Teacher.find().where({dname:'CS'})
        res.send(items)
    })
    router.get('/astronomy',async(req,res)=>{
        const items= await Astronomy.find().limit(10)
        res.send(items)
    })
    router.get('/studentcourse',async(req,res)=>{
        const items1= await StudentCourse1.find().distinct('CID')
        const items=await Course1.find().where({cid:items1.cid})
        res.send(items)
    })
    router.get('/top10student',async(req,res)=>{
        const items1=await StudentCourse1.aggregate()
    })
    app.use('/web/api',router)
}
