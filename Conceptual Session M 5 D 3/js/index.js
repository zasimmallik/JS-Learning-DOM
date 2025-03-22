document.addEventListener("DOMContentLoaded", function () {
    const incomeInput = document.getElementById("income");
    const softwareInput = document.getElementById("software");
    const coursesInput = document.getElementById("courses");
    const internetInput = document.getElementById("internet");
    const savingsInput = document.getElementById("savings");
  
    const calculateBtn = document.getElementById("calculate");
    const calculateSavingsBtn = document.getElementById("calculate-savings");
  
    const totalExpensesSpan = document.getElementById("total-expenses");
    const balanceSpan = document.getElementById("balance");
    const savingsAmountSpan = document.getElementById("savings-amount");
    const remainingBalanceSpan = document.getElementById("remaining-balance");
    const resultsSection = document.getElementById("results");
    const logicError = document.getElementById("logic-error");
  
    function calculateExpenses() {
      const income = parseFloat(incomeInput.value) || 0;
      const software = parseFloat(softwareInput.value) || 0;
      const courses = parseFloat(coursesInput.value) || 0;
      const internet = parseFloat(internetInput.value) || 0;
  
      const totalExpenses = software + courses + internet;
      const balance = income - totalExpenses;
  
      if (balance < 0) {
        logicError.classList.remove("hidden");
        resultsSection.classList.add("hidden");
      } else {
        logicError.classList.add("hidden");
        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
        balanceSpan.textContent = balance.toFixed(2);
        resultsSection.classList.remove("hidden");
      }
    }
  
    function calculateSavings() {
      const balance = parseFloat(balanceSpan.textContent) || 0;
      const savingsPercentage = parseFloat(savingsInput.value) || 0;
  
      if (savingsPercentage < 0 || savingsPercentage > 100) {
        document.getElementById("savings-error").classList.remove("hidden");
        return;
      } else {
        document.getElementById("savings-error").classList.add("hidden");
      }
  
      const savingsAmount = (balance * savingsPercentage) / 100;
      const remainingBalance = balance - savingsAmount;
  
      savingsAmountSpan.textContent = savingsAmount.toFixed(2);
      remainingBalanceSpan.textContent = remainingBalance.toFixed(2);
    }
  
    calculateBtn.addEventListener("click", calculateExpenses);
    calculateSavingsBtn.addEventListener("click", calculateSavings);
  });
  