function isValid(){
    var email=document.getElementById("form").elements.item(0).value;
    var pwd=document.getElementById("form").elements.item(1).value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value))
     {
    }
    else
    alert("You have entered an invalid email address!")
}
function clear(){
    document.forms["form"]["email"].value=" ";
}