
/**
 * Return string of random computer choice: rock, paper, or scissors
 */
function computerPlay(){

    // Pick random number [0-2]
    let randomIdx = Math.floor(Math.random() * 3);
    let choiceArr = ["Rock", "Paper", "Scissors"];
    return choiceArr[randomIdx];
}

/**
 * Returns an object that contains message "msg" to be printed
 * and points to be allocated; p1 = player, p2 = computer
 * 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 */
function playRound(player, computer){

    // Make choices case insensitive
    let playerSelection = player.toUpperCase();
    let computerSelection = computer.toUpperCase();

    // Return this
    var results = {
        msg: "",
        p1: 0,
        p2: 0
    };

    if (playerSelection == "ROCK"){
        if (computerSelection == "ROCK"){
            results.msg = "It's a tie!"; 
            results.p1 = 0;
            results.p2 = 0;
        }
        if (computerSelection == "PAPER"){
            results.msg = "You lose! Paper beats rock.";
            results.p1 = 0;
            results.p2 = 1;
        }
        if (computerSelection == "SCISSORS"){
            results.msg = "You win! Rock beats scissors.";
            results.p1 = 1;
            results.p2 = 0;
        }
    }

    if (playerSelection == "PAPER"){
        if (computerSelection == "ROCK"){
            results.msg = "You win! Paper beats rock, usually.";
            results.p1 = 1;
            results.p2 = 0;
        }
        if (computerSelection == "PAPER"){
            results.msg = "It's a tie! Wow!";
            results.p1 = 0;
            results.p2 = 0;
        }
        if (computerSelection == "SCISSORS"){
            results.msg = "You lose! Scissors beat paper! Loser!";
            results.p1 = 0;
            results.p2 = 1;
        }
    }

    if (playerSelection == "SCISSORS"){
        if (computerSelection == "ROCK"){
            results.msg = "You lose! Rock beats scissors, dummy.";
            results.p1 = 0;
            results.p2 = 1;
        }
        if (computerSelection == "PAPER"){
            results.msg = "You win! Scissors beats paper, as always.";
            results.p1 = 1;
            results.p2 = 0;
        }
        if (computerSelection == "SCISSORS"){
            results.msg = "It's a tie! Pick something else!! (Or don't [eye emoji])";
            results.p1 = 0;
            results.p2 = 0;
        }
    }

    return results;
}

/**
 * Emulates a whole RPS game
 * 
 */
function game(){
    var playerScore = 0;
    var computerScore = 0;
    const numberOfRounds = 5;
    let playerChoice;
    let computerChoice;

    let roundResults;
    console.log("Let's start an RPS game!");

    // Play numberOfRounds rounds of RPS
    for (let i=0;i<numberOfRounds;i++){

        // Retrieve player choices
        computerChoice = computerPlay();
        playerChoice = prompt("Choose: [ROCK PAPER SCISSORS]");

        console.log("comp chose: " + computerChoice);
        // Play a round
        roundResults = playRound(playerChoice,computerChoice);

        // Print round result message
        console.log( roundResults.msg );

        // Update player scores
        playerScore += roundResults.p1;
        computerScore += roundResults.p2;

        // Print updated scores
        console.log("Current score:" + '\n' +
                    "Player: " + playerScore + '\n' +
                    "Computer: " + computerScore);
    }
}
