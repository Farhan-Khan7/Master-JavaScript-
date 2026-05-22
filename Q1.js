function ispowerTwo(n){

    if(n<1){
        return false
    }
    while(n > 1){

        if(n % 2 !== 0){  
            return false
        }
        n = n/2
    }

    if(n === 1){
        return true
    }else{
        return false
    }

}

console.log(ispowerTwo(16))



// 1 2 4 8 16 32


