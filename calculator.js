let prompt = require("prompt-sync")();

function calculator() {
    let val1 = Number(prompt("Enter value 1 =  "));
    let operator = prompt("Enter opeartor = ");
    let val2 = Number(prompt("Enter value 2 = "));


    if (operator === "+") return val1 + val2;
    else if (operator === "-") return val1 - val2;
    else if (operator === "*") return val1 * val2;
    else if (operator === "/" && val2 !== 0) return val1 / val2;
    else return "wrong operator";

}


let result = calculator()

console.log(result)