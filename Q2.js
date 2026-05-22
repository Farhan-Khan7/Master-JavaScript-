function isPalindrome(number) {
    let originol = number;

    let reverse = 0;

    while(number > 0){
        let last_digit = number % 10;
        reverse = reverse * 10 + last_digit;
        number = Math.floor(number/10)
    }
    
    if(originol == reverse){
        return true
    }else{
        return false
    }
}


console.log(isPalindrome(121))