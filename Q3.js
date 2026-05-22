let prompt = require("prompt-sync")()
let number = parseInt(prompt("Enter a number: "))

function ifPerfectSquare(n){
    let root = Math.sqrt(n)

    if(Math.pow(root, 2) === n){
        return "Yes"
    }else{
        return "No"
    }
}

console.log(ifPerfectSquare(number))