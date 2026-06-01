let prompt = require('prompt-sync')()

let str_1 = prompt("Enter the first string: ").toLowerCase()
let str_2 = prompt("Enter the second string: ").toLowerCase()

let result = '';
for (let i = 0; i < str_1.length; i++) {
    if (str_1[i] !== str_2[i]) {
        result = 'This strings are not same!'
    }else{
        result = "This string are same "
    }
}

console.log(result)