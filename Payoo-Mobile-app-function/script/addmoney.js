document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
      const amount = getInputValueByID("amount");
      const pin = getInputValueByID("pin");
      const acount = document.getElementById("Acount-nunber").value;
      const mainBalance = getInnerTextByID("main-balance")
    console.log(mainBalance)
    const selectedBank = document.getElementById("allbank").value;
    
    
    if (amount<0) {
      alert("bhai eita kono kotha positive number dite hobe")
      return;
    }
    
    

      if (acount.length===11) {
        if (pin===1234) {
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText = sum;
          setInnerTextByIDandValue("main-balance", sum)
          
          const container = document.getElementById("transection-container");

          const div = document.createElement("div");
div.classList.add("bg-red-400")
          div.innerHTML = `
          <h1 class="text-yellow-300">ADDed Money form ${selectedBank}</h1>
          <h3>${amount}</h3> 
          <p>account number: ${acount}</p>

          
          `
          container.appendChild(div)



        }
        else {
            console.log("pin tik nai")
          }
      } else {
          console.log("account number tik nai")
      }
      
    
  });
