
const data = document.getElementById("results");

const loader = document.getElementById("loading");


document.getElementById("loan-form").addEventListener('submit', function(e){

    // Turns on the loader and hides the data fields
    data.style.display = 'none';
    loader.style.display = 'block';
    
    setTimeout(cacculateData, 2000);
    
    e.preventDefault();
});

function cacculateData(){
    console.log("Calculating data...");
    
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
    
    // Display data
    if(isFinite(monthlyPayment)){

        eMonthlyPayment.value = monthlyPayment.toFixed(2);
        eTotalPayment.value = (monthlyPayment * monthsToPayback).toFixed(2);
        eTotalInterest.value = ((monthlyPayment * monthsToPayback) - principal).toFixed(2);

        // Shows the data results and disables the loader
        data.style.display = 'block';
        loader.style.display = 'none';

    } else {
        showError("Seems like you missed something");
    }

    
}


// Error functionality
function showError(error){

    // Disables both loader and data results as there was an error
    data.style.display = 'none';
    loader.style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector(".card");
    const form = document.querySelector("#loan-form");


    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above the Loan Calculator heading
    card.insertBefore(errorDiv, form);

    //clear error after 2 seconds
    setTimeout(removeErrorMsg, 2000);

}

function removeErrorMsg(){
    document.querySelector('.alert').remove();
}
