const mongoose=require("mongoose")
const patientschema=new mongoose.Schema(
    {
        patientname:String,
        patientaddress:String,
        patientphone:String,
        patientsymptons:String,
        patientstatus:String

    }
)
module.exports=mongoose.model("patient",patientschema)