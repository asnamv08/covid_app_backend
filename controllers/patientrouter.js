const express=require("express")
const patientmodel = require("../models/patientmodel")
const router=express.Router()
router.post("/patient_entry",async(req,res)=>{
    let data=req.body
    let patient=new patientmodel(data)
    let result=await patient.save()
    res.json({
        status:"success"

    })
})
router.get("/view",async(req,res)=>{
    let data=await patientmodel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientmodel.find(input)
    res.json(data)
})
module.exports=router