import mongoose, { Schema } from "mongoose";


const TeacherSchema = new Schema({
    name : String,
    regno : String,
    email : String,
    phoneno : String,
    password : String       
})


const TeacherModel = mongoose.model("TeacherSchema",TeacherSchema)


export {TeacherModel}