// Create Function that allows the computer to randomly pick either Rock Paper or Scissor
function getComputerInput(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    let computerNmbr = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    let computerDecision;
    if (computerNmbr === 1){
        computerDecision = "Rock";
    } else if (computerNmbr === 2) {
        computerDecision = "Paper";
    } else if (computerNmbr === 3 || computerNmbr === 4) {
        computerDecision = "Scissor";
    }
    return computerDecision;
};
// Create Function that allows the player to input Rock Paper or Scissor, the input should be case insensitive.

function getHumanInput(){
    let humanDecision = prompt("Please Enter 'Rock', 'Paper', or 'Scissor'")
    function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    return capitalize(humanDecision);
};
// Create Function that compares both Inputs with one another and determin a winner, a loser, or a tie and announces the result in the console.
let humanInput;
let computerInput;
let humanScore = 0;
let computerScore = 0;
// Create Function that plays 5 Rounds and keeps track of the Score of players, once 5 rounds are played a winner is determined.
function bestOf5(humanPoints, computerPoints) {
    if (humanPoints < 5 && computerPoints < 5) {
        playRound();
        function playRound(){
            humanInput = getHumanInput();
            computerInput = getComputerInput();
            if (humanInput === computerInput) {
                alert("It's a Tie!")
                humanScore++; 
                computerScore ++;
            } else if (humanInput == "Rock" && computerInput == "Scissor") {
                alert("Rock beats Scissor! :)")
                humanScore++;
            } else if (humanInput == "Rock" && computerInput == "Paper") {
                alert("Paper beats Rock! :(")
                computerScore++;
            } else if (humanInput == "Paper" && computerInput == "Rock") {
                alert("Paper beats Rock! :)")
                humanScore++;
            } else if (humanInput == "Paper" && computerInput == "Scissor") {
                alert("Scissor beats Paper! :(")
                computerScore++;
            } else if (humanInput == "Scissor" && computerInput == "Paper") {
                alert("Scissor beats Paper! :)")
                humanScore++;
            } else if (humanInput == "Scissor" && computerInput == "Rock") {
                alert("Rock beats Scissor! :(")
                computerScore++;
            } else {
                alert("Something went wrong!!!!11!!");
            }
            return;
        };    
        console.log("Player 1 has " + humanScore + " Points" + "\n" + "Player 2 has " + computerScore + " Points")
        return bestOf5(humanScore, computerScore);
    } else {
        announceWinner(humanScore, computerScore);
    }
}
// Output the total winner to the console log.
function announceWinner(humanPoints, computerPoints) {
    if (humanPoints > computerPoints) {
        (alert("Player 1 Won the Game!!! Yaaay!"))
    } else if (humanPoints < computerPoints) {
        alert("Player 2 Won the Game!!! Congrats!!")
    } else if (humanPoints === computerPoints) {
        alert("Both of you tied 5 times! WOW!!")
    } else {
        alert("Something went wrong :o")
    }
    return alert("The game is over, refresh the Page to play another game!")
}
