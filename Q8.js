function genrateOTP(){
    let dig_1 = Math.floor(Math.random() * 9 + 1 );
    let dig_2 = Math.floor(Math.random() * 9 + 1 );
    let dig_3 = Math.floor(Math.random() * 9 + 1 );
    let dig_4 = Math.floor(Math.random() * 9 + 1 );
    
    return [dig_1 , dig_2 , dig_3 , dig_4]
}

let OTP = genrateOTP()

console.log(...OTP)