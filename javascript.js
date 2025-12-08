// Create Function that allows the computer to randomly pick either Rock Paper or Scissor
function getComputerChoice(){
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

console.log(getComputerChoice());
// Create Function that allows the player to input Rock Paper or Scissor, the input should be case insensitive.

function getHumanChoice(){
    let humanDecision = prompt("Please Enter 'Rock', 'Paper', or 'Scissor'")
    function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    return capitalize(humanDecision);
};

console.log(getHumanChoice())
// Create Function that compares both Inputs with one another and determin a winner, a loser, or a tie and announces the result in the console.

// Create Function that plays 5 Rounds and keeps track of the Score of players, once 5 rounds are played a winner is determined.
// Output the total winner to the console log.