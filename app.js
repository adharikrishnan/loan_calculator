
document.getElementById("loan-form").addEventListener('submit', cacculateData);

function cacculateData(e){
    console.log("calculating data...");
    
    const eAmount = document.getElementById("amount");
    const eInterest = document.getElementById("interest");
    const eYears = document.getElementById("years");

    const eMonthlyPayment = document.getElementById("monthly-payment");
    const eTotalPayment = document.getElementById("total-payment");
    const eTotalInterest = document.getElementById("total-interest")


    const principal = parseFloat(eAmount.value);
    const monthlyInterest = parseFloat(eInterest.value) / 100 / 12;
    const monthsToPayback = parseFloat(eYears.value) * 12;

    // Calculate monthly payments
    const cRate = Math.pow( 1 + monthlyInterest, monthsToPayback);
    const monthlyPayment = (principal * monthlyInterest * cRate) / (cRate - 1)
    
    if(isFinite(monthlyPayment)){
        eMonthlyPayment.value = monthlyPayment.toFixed(2);
        eTotalPayment.value = (monthlyPayment * monthsToPayback).toFixed(2);
        eTotalInterest.value = ((monthlyPayment * monthsToPayback) - principal).toFixed(2);
    } else {
        showError("Something Wrong with the values entered!");
    }

    e.preventDefault();
}

function showError(error){

    const errorDiv = document.createElement('div');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error))
}

