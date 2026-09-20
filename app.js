const BASE_URL = "https://api.frankfurter.dev/v1/latest?";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = true;
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = true;
        }
        select.append(newOption);

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let contryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${contryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
    
}

const updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    
    if (amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }

    if (fromCurr.value === toCurr.value) {
        msg.innerText = "Please select different currencies to convert.";
        return;
    }

    const URL = `${BASE_URL}amount=${amountVal}&from=${fromCurr.value}&to=${toCurr.value}`;
    
    let response = await fetch(URL);
    let data = await response.json(); 
    
    let finalAmount = data.rates[toCurr.value]; 

    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
    
});

window.addEventListener("load",()=>{
    updateExchangeRate();
});
