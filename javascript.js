

window.document.addEventListener("DOMContentLoaded",()=>{

let button = document.querySelectorAll("button");
let display =document.querySelector(".display");
let decimal = document.querySelector(".decimal")
display.innerText="0";
let firstValue = null;
let secondValue = null;
let operation = null;
button.forEach((btn)=>{

    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("number")){
            if(display.innerText === "0" && firstValue === null){
            
                display.innerText = `${btn.value}`;
            }
            else if(firstValue !== null && secondValue === null){
                display.innerText = `${btn.value}`;
                secondValue = `${btn.value}`;
            }
            
            else{
                display.innerText  = display.innerText + `${btn.value}`;
            }
        }
        if(btn.classList.contains("operator")){
            decimal.removeAttribute("disabled")
            
            if(firstValue === null){
                firstValue = Number(display.innerText);
                operation = btn.value; 
            }
            else{
                operation = btn.value; 
            }

        }    
        if(btn.classList.contains("equal")){
            if(firstValue !== null && operation !== null && secondValue !== null){
                secondValue = Number(display.innerText)

                if(operation === "+"){
                    firstValue = add(firstValue,secondValue)          
                }
                else if(operation === "-"){
                    firstValue = subtract(firstValue,secondValue)           
                }
                else if(operation === "*"){
                    firstValue = multiply(firstValue,secondValue)              
                }
                else if(operation === "/"){
                    
                    if(secondValue === 0){
                        display.innerText = "ERROR";
                        return;
                    }
                    else{
                    firstValue = divide(firstValue,secondValue)
                    }              
                }
                else if(operation === "%"){
                    firstValue = mod(firstValue,secondValue)
                }
                operate()
            } 
        }

        if(btn.classList.contains("clear")){
            firstValue = null;
            secondValue = null;
            operation =null;
            display.innerText = "0";
        }   
    
        if(btn.classList.contains("sign")){
            
            if(Number(display.innerText) > 0){
                display.innerText = -display.innerText
                if(firstValue!== null){
                    firstValue = -1*(firstValue)
                }
            }
            else{
                display.innerText = Number(display.innerText) * -1 
                if(firstValue!== null){
                    firstValue = Number(display.innerText);
                }
            }

            
        }

        if(btn.classList.contains("decimal")){
            if(secondValue === null && firstValue !== null){
                display.innerText = "0.";
                secondValue = "0."
            }
            else{
            display.innerText = display.innerText + ".";
            btn.setAttribute("disabled" , true)
            }
        }
    
    
    
    
    });

})

function operate(){
    secondValue = null;
    operation =null;
    display.innerText = firstValue;

}

function mod(number1,number2){
    let number = number1 % number2;
    if (number%1 === 0){
        return number
    }
    else{
        return number.toFixed(8)
    }
}

function add(number1,number2){
    let number = number1 + number2;
    if (number%1 === 0){
        return number
    }
    else{
        return number.toFixed(8)
    }
}

function subtract(number1,number2){

    let number = number1 - number2;
    if (number%1 === 0){
        return number
    }
    else{
        return number.toFixed(8)
    }
}

function multiply(number1,number2){

    let number = number1 * number2;
    if (number%1 === 0){
        return number
    }
    else{
        return number.toFixed(8)
    }
}

function divide(number1,number2){

    let number = number1 / number2;
    if (number%1 === 0){
        return number
    }
    else{
        return number.toFixed(8)
    }
}


})