const express = require('express');
const app = express();
const router = express.Router();
const {mongourl} = require('../../model/database');
const {Admin_details} = require('../../model/Admin_details');
const {Mark_sheet} = require('../../model/Mark_sheet');
const {Student_details} = require('../../model/Student_details');
const {mongoose}=require('mongoose');

mongoose.connect(mongourl,{useNewUrlParse:true});

mongoose.connection.on('connected',()=>{
    console.log("Mongoose is connected");
})



connection.connect((err) => {
    if(err) throw err;
    console.log('Connection successful');
})
//Student
//Student login
router.get('/login',function(req,res){
    console.log("login");
res.render('Login');
})

//Student login validate
router.post('/validate',function(req,res){
    var email=req.body.Email; 
    var pwd=req.body.password;
    console.log("works");
    connection.query('select email from student_details where email like ?',[email],(err,results)=>{
        if (err) throw err;
        if(results){
            connection.query('select pwd from student_details where email like ? and pwd like ?)',[email,pwd],(err,results1)=>{
                connection.query('select student_marksheet.*,student_details.email from student_marksheet join student_details on student_marksheet.rollno= student_details.rollno where email like ? and pwd like ?',[email,pwd],(err,results)=>{
                    console.log(results);
                    res.render('user-list',{userData:results});
                })
                
            })
        }
    })
})

//Student Signup
router.get('/signup',function(req,res){
    console.log("signup");
res.render('Signup');
})

//Student Signup Validate
router.use('/signupValidate',function(req,res){
console.log('validated');
var Uname= req.body.Uname;
var email=req.body.Email;
var rollno=req.body.rollno;
var pwd=req.body.password;

connection.query('insert into student_details values(?,?,?,?)',[Uname,email,rollno,pwd],(err,results)=>{
    if(err) throw err;
    if(results){
        console.log("Values Inserted");
        res.render('Login');
    }
})
})

//Admin
//Admin Login
router.get('/Adminlogin',function(req,res){
    console.log("Admin login");
res.render('Admin_login');
})

//Admin login validation
router.post('/Adminvalidate',function(req,res){
    var email=req.body.Email; 
    var pwd=req.body.password;
    connection.query('select email from admin_details where email like ?',[email],(err,results)=>{
        if (err) throw err;
        if(results){
            connection.query('select pwd from admin_details where email like ? and pwd like ?)',[email,pwd],(err,results1)=>{
                connection.query('select student_marksheet.*,student_details.email from student_marksheet join student_details on student_marksheet.rollno= student_details.rollno where email like ? and pwd like ?',[email,pwd],(err,results)=>{
                    console.log(results);
                    res.render('user-list',{userData:results});
                })
                
            })
        }
    })
})

//Admin Signup
router.get('/Adminsignup',function(req,res){
    console.log("Admin signup");
res.render('Admin_signup');
})

//Student Signup Validate
router.use('/AdminValidate',function(req,res){
console.log('Admin signup validated');
var Uname= req.body.Uname;
var email=req.body.Email;
var pwd=req.body.password;

connection.query('insert into Admin_details values(?,?,?,?)',[Uname,email,pwd],(err,results)=>{
    if(err) throw err;
    if(results){
        console.log("Admin Values Inserted");
        res.render('Admin_login');
    }
})
})

module.exports = router;