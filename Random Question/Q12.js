let prompt = require("prompt-sync")();

function atmMachine() {
    let pin_dig_1 = String(Math.floor(Math.random() * 9 + 1));
    let pin_dig_2 = String(Math.floor(Math.random() * 9 + 1));
    let pin_dig_3 = String(Math.floor(Math.random() * 9 + 1));
    let pin_dig_4 = String(Math.floor(Math.random() * 9 + 1));

    let atm_pin = pin_dig_1 + pin_dig_2 + pin_dig_3 + pin_dig_4
    Number(atm_pin)
    console.log(`Your PIN : ${atm_pin}`)

    let current_balance = 100000;
    let withdraw, deposit;
    let original_pin = Number(prompt("Enter your PIN : "));

    do {
        if (atm_pin == original_pin) {
            console.log("Your PIN is Correct \n\nPress the Number Key If your want \n\n 1. Balance Check \n 2. Withdraw \n 3. Deposit \n 4. Exit ")
            let NumberKey = Number(prompt("Press key : "))
            if (NumberKey === 1) {
                console.log(`Your Current Balance : ${current_balance}`)
            } else if (NumberKey === 2) {
                withdraw = Number(prompt("Enter the amount you want to withdraw : "))
                if (withdraw <= current_balance) {
                    current_balance -= withdraw
                    console.log(`Your Current Balance After Transaction: ${current_balance}`)
                } else {
                    console.log("Insufficient Balance!")
                }
            } else if (NumberKey === 3) {
                deposit = Number(prompt("Enter the amount you want to deposit : "))
                current_balance += deposit
                console.log(`Your Current Balance After Transaction: ${current_balance}`)
            } else if (NumberKey === 4) {
                console.log("Thank you for using our ATM Machine!")
                return;
            }
        } else {
            return "Invalid PIN!"
        }


    }while (true)

}

atmMachine()