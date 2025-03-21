document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Acount-nunber").value;

    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("chashout-pin");
    const mainBalance = getInnerTextByID("main-balance");

if (amount>mainBalance) {
    alert("invalid amount");
    return;
}

    if (accountNumber.length===11) {
    if (pinNumber===1234) {
        const sum = mainBalance - amount;
        setInnerTextByIDandValue("main-balance", sum)
        
        const container = document.getElementById("transection-container");

        const p = document.createElement("p");
        p.innerText = `
        cashout ${amount} from this ${accountNumber} account
        `
        container.appendChild(p)

    }
    else {
        alert("pin not valid")
        }
    }
    else {
        alert("account number not valid")
    }
})