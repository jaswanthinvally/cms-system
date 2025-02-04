import mongoose, { Schema }  from "mongoose";


const StudentSchema = new Schema({
    name : String,
    regno : Number,
    phoneno : Number,
    email: String,
    password : String
   
})





const StudentModel = mongoose.model("student",StudentSchema)


export { StudentModel}