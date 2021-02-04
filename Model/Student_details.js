const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const student_schema= Schema({
    name:String,
    email:String,
    rollno:String,
    password:String
});

module.exports=mongoose.model("Student_details",student_schema);