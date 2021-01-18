function Validate(){
    var name=document.forms["sform"]["name"].value;
    var rno=document.forms["sform"]["rno"].value;
    var email=document.forms["sform"]["email"].value;
    var pwd=document.forms["sform"]["pwd"].value;
    var cpwd=document.forms["sform"]["cpwd"].value;
    var gender=document.forms["sform"]["gender"].value;
    if(name==""||rno==""||email==""||pwd==""||cpwd==""||gender=="")
    {
        alert("Please fill all fields");
    }
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        alert('Invalid name given.');
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(sform.email.value))
     {
    }
    else
    alert("You have entered an invalid email address!")
    if((pwd.length)<8)
    {
        alert("Password should contain atleast 8 characters");
    }
    else if(pwd!=cpwd)
    {
        alert("Passwords do not match!")
    }
}
function clear(){
    document.forms["sform"]["name"].value=" ";
    document.forms["sform"]["rno"].value=" ";
    document.forms["sform"]["email"].value=" ";
    document.forms["sform"]["pwd"].value=" ";
    document.forms["sform"]["gender"].value=" ";
}