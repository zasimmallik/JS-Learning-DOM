// console.log("hero alom")

//  step 1 = ID k dhorchi  getElementById diye 

document.getElementById("login-btn")
.addEventListener("click", function (event) {
    event.preventDefault();
    const acountNunber = document.getElementById("Acount-nunber").value;
    const pin = document.getElementById("pin").value;
    const convertedPin=parseInt(pin)
    if (acountNunber.length === 11) {
      
        if (convertedPin===1234) {
            window.location.href="./main.html"
        }
        else {
            alert("pin tikh nai ")
        }
    }
    else {
       alert("need valid acount number")
    }

})