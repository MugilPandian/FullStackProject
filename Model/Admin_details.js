const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const admin_schema= Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model("Admin_details",admin_schema);