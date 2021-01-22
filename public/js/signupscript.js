function Validate(){
    var name=document.getElementById("Name").value;
    var rno=document.getElementById("RollNo").value;
    var email=document.getElementById("Email").value;
    var pwd=document.getElementById("Pwd").value;
    var cpwd=document.getElementById("CPwd").value;
    var gender=document.getElementsByName("gen");
    
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        // alert('Invalid name given.');
        NameErr.textContent="Enter Full Name";
    }

    var regNum=/^[0-9]+$/;
    if(!regNum.test(rno)){
        RollNoErr.textContent="Enter a Number";
    }
    
    var regEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regEmail.test(email))
    {
        EmailErr.textContent="Invalid Email Id";
    }
        
    var regPwd=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regPwd.test(pwd))
    {
        PwdErr.textContent="Password should be minimum 8 characters, 1 letter, 1 number";
    }
    
    if(cpwd!==pwd){
        CPwdErr.textContent="Passwords do not Match";
    }

    // if(gender=="")
    // {
    //     GenErr.textContent="Please fill the above field";
    // }

    var formValid = false;

    var i = 0;
    while (!formValid && i < gender.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) GenErr.textContent="Please fill the above field";
}
