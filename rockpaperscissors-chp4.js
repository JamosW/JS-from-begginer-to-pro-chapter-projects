let choices = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * 3);
let promptChoice = prompt("Choose your pick");


function rockPaperScissors(choice, oppChoice) {
    let win = " therefore you win";
    let lose = " therefore you lose";
    let tie = " therefore it is a tie"

    let message = "You chose " + choice + " your opponent chose " + oppChoice
   /* switch choices and opp choice to reach a conclusion */
    switch (choice) {
        
        case "rock":
            switch(oppChoice) {
                case "rock":
                    console.log(message + tie)
                    break;
                case "paper":
                    console.log(message + lose)
                    break;
                case "scissors":
                    console.log(message + win)
                    break;
            }
            break;
        case "paper":
            switch(oppChoice) {
                case "rock":
                    console.log(message + win)
                    break;
                case "paper":
                    console.log(message + tie)
                    break;
                case "scissors":
                    console.log(message + lose)
                    break;
            }
            break;
        case "scissors":
            switch(oppChoice) {
                case "rock":
                    console.log(message + lose)
                    break;
                case "paper":
                    console.log(message + win)
                    break;
                case "scissors":
                    console.log(message + tie)
                    break;
            }
            break;
        default:
            console.log("invalid entry")
            break;
    }

}

console.log(random)
rockPaperScissors(promptChoice, choices[random]);