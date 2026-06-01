let user_name = "farhan"

let lastChar = user_name.length-1
console.log(user_name[lastChar])

// this is another question to reverse the string

let reverse_str = ''
for(let i = user_name.length-1; i>=0; i--){
    reverse_str += user_name[i]
}

console.log(reverse_str)