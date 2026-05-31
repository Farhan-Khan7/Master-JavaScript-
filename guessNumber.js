let prompt = require("prompt-sync")()

function RandomNumberGenerat() {

    let randomNumber = Math.floor(Math.random() * 100 + 1);

    let attempts = 0;
    let guessNumber;

    do {
        guessNumber = Number(prompt('Guess the Same Number = '))
        attempts++;
        if (guessNumber > randomNumber) console.log("Your Number is Too High");
        else if (guessNumber < randomNumber) console.log("Your Number is Too Low");
        else if (guessNumber === randomNumber) return `You Found it Exact Number in ${attempts} attempts`
    } while (randomNumber !== guessNumber)

}

let result = (RandomNumberGenerat())
console.log(result)

