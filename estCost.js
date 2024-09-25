/*  

   JavaScript 7th Edition
      CMPL 648 
      Group Project 
      Author: Mlyn Wilkinson & Amanda Bates & Ryan Zoucho 
      Date:   09/12/2024
*/

"use strict"; 
alert("JS file loaded"); 

// Array 
const services = document.getElementsByClassName("services");

// Loop 1 
for (let i = 0; i <services.length; i++) {
  services[i].addEventListener("click", calcTotal);
}

// Function 1 
function calcTotal(){
  let orderCost = 0;

  // Loop 2
  for (let i = 0; i < services.length; i++){
    if (services[i].checked){
      orderCost += Number(services[i].value);
    }
  }
  const finalCostElement = document.getElementById("finalCost"); 
  finalCostElement.innerHTML = formatAmount(orderCost);
}

// Function 2
function formatAmount(value){
  return "$" + value.toFixed(2);
}
