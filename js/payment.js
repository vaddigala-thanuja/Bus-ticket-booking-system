/* Seat and price */

var seatsSelected = 1;
var pricePerSeat = 500;


/* Show seat count and total */

window.onload = function(){

var total = seatsSelected * pricePerSeat;

var seatElement = document.getElementById("seatCount");
var amountElement = document.getElementById("totalAmount");

if(seatElement){
seatElement.innerText = seatsSelected;
}

if(amountElement){
amountElement.innerText = total;
}

};


/* Validate passenger details */

function validatePassenger(){

var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var gender = document.getElementById("gender").value;
var phone = document.getElementById("phone").value;

if(name=="" || age=="" || gender=="" || phone==""){

alert("Please enter the details.");

return;

}

var phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phone)){

alert("Please enter valid phone number.");

return;

}

/* Show payment panel */

document.getElementById("paymentPanel").style.bottom = "0";

}


/* Payment success */

function paymentSuccess(method){

var name = document.getElementById("name").value;
var phone = document.getElementById("phone").value;

var seat = seatsSelected;
var amount = seatsSelected * pricePerSeat;


/* Store users */

var users = JSON.parse(localStorage.getItem("users")) || [];

users.push({
name:name,
phone:phone
});

localStorage.setItem("users", JSON.stringify(users));


/* Store payments */

var payments = JSON.parse(localStorage.getItem("payments")) || [];

payments.push({
name:name,
seat:seat,
amount:amount,
method:method
});

localStorage.setItem("payments", JSON.stringify(payments));


alert(method + " Payment Successful");

window.location.href = "ticket.html";

}
