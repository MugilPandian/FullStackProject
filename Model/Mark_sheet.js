const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const marksheet_schema= Schema({
    name:String,
    rollno:String,
    email:String,
    examdate:Date,
    t1:Number,
    t2:Number,
    t3:Number
});

module.exports=mongoose.model("Mark_sheet",marksheet_schema);