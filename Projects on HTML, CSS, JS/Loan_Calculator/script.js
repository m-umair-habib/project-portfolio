function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById("loan_amount_input").value);
    const interestRate = parseFloat(document.getElementById("interest_rate_input").value);
    const loanTerm = parseFloat(document.getElementById("loan_term_input").value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        showError('Please enter Valid Numbers for all fields');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest : ${totalInterest.toFixed(2)}</strong></p>
    `;
}

function showError(message){
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
}

document.getElementById('calculatorBtn').addEventListener("click", calculateLoan);