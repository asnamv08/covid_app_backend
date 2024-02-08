const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controllers/patientrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/patientDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

app.use("/api/patient",patientrouter)

app.listen(3001,()=>{
    console.log("server running")
})