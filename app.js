var express= require('express');
var app=express();
var bodyParser =require('body-parser');

// var connection=require('./Controller/route'); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.listen(3307,()=>{
    console.log("Server is listening 1103");
})

