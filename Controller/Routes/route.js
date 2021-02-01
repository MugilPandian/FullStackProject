const express = require('express');
const app = express();
const router = express.Router();
const connection = require('../../model/database.js');



connection.connect((err) => {
    if(err) throw err;

    console.log('Connection successful');
})

router.get('/login',function(req,res){
    console.log("login");
res.render('Login');

})

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
router.get('/signup',function(req,res){
    console.log("signup");
res.render('Signup');

})

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

module.exports = router;