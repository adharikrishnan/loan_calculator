
document.getElementById("loan-form").addEventListener('submit', cacculateData);

function cacculateData(e){
    console.log("calculating data...");
    
    const eAmount = document.getElementById("amount");
    const eInterest = document.getElementById("interest");
    const eYears = document.getElementById("years");

    const eMonthlyPayment = document.getElementById("monthly-payment");
    const eTotalPayment = document.getElementById("monthly-payment");
    const eTotalInterest = document.getElementById("total-interest")


    const principal = parseFloat(eAmount.value);
    const interestRate = parseFloat(eInterest.value) / 100 / 12;
    const cacculatePayment = parseFloat(eYears.value) * 12

    // Calculate monthly payments
    const 



    e.preventDefault();
}

