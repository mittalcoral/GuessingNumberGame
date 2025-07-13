const max = prompt("Enter the max number:");
const random = Math.floor(Math.random() * max) +1;

let guess = prompt("Enter your guess: ");

while(true){

    if(guess == "quit"){
        console.log("You Lose, the random number was", random);
        break;
    }
    
    if(guess == random){
        console.log("Congrats! Your guess is correct.");
        break;
    }else if(guess > random){
        guess = prompt("Your guess is too large, please try again!");
    }else{
        guess = prompt("Your guess is too small, please try again!");
    }
}