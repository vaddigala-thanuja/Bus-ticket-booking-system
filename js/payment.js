function validatePassenger(){

var name=document.getElementById("name").value;
var age=document.getElementById("age").value;
var gender=document.getElementById("gender").value;
var phone=document.getElementById("phone").value;

if(name=="" || age=="" || gender=="" || phone==""){
alert("Please enter the details.");
return;
}

var phonePattern=/^[0-9]{10}$/;

if(!phonePattern.test(phone)){
alert("Please enter valid phone number.");
return;
}

document.getElementById("paymentPanel").style.bottom="0";

}

function paymentSuccess(method){

alert(method + " Payment Successful");

window.location.href="ticket.html";

}
