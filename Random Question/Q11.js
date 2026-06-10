let prompt = require("prompt-sync")();

let choice = prompt("Are you new user if 'YES' 'Create Account!' NO Login Now! ").toLowerCase()

let old_userName = "Farhan khan";
let old_passwrod = "farhan@123"

if (choice == 'yes') {
    console.log("Create your own account !")
    let new_user = prompt("Create UserName : ")
    let password = prompt("Create PassWord : ")

    old_userName = new_user;
    old_passwrod = password;

    console.log("Accont Created! Login Now")
    let new_user_username = prompt("Enter Exact UserName : ")
    let new_user_password = prompt("Enter Same Passwrod : ")

    if (new_user == new_user_username && password == new_user_password) {
        console.log(`Welcome ${new_user}`)
    }
} else if (choice == 'no') {
    console.log("Login Now !")
    let userName = prompt("Enter your UserName : ")
    let passWord = prompt("Enter your Passwrod : ")

    if (old_userName == userName && old_passwrod == passWord) {
        console.log(`You are logged in `)
    }
    else {
        console.log("Login failed")
    }
}