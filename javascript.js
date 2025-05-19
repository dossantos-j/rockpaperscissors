/* play 5 rounds and declare winner */

/*
let playGame = (rounds) => {
    
    let computerPoints = 0;
    let humanPoints = 0;

    // run no. of rounds
    for (let i = 1; i <= rounds; i++) {
        let humanScore = 0;
        let computerScore = 0;
        let playRound = (humanScore, computerScore) => {
            console.log("*** Round " + i + " ***")
            // get the computer's choice (randomly return one of three choices)
            let getComputerChoice = (min, max) => {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
            };
            computerScore = getComputerChoice(1, 3);

            // get the human's choice
            let getHumanAnswer = () => {
                let answer = prompt("Time to play ROCK, PAPER, SCISSORS: what's your bet?").toUpperCase();
                if (answer == "ROCK") {
                    return 1;
                } else if (answer == "PAPER") {
                    return 2;
                } else if (answer == "SCISSORS") {
                    return 3;
                }
            }
            humanScore = getHumanAnswer();

            // log choices
            let logComputerChoice = () => {
                if (computerScore == 1) {
                    console.log("Computer choice = ROCK");
                } else if (computerScore == 2) {
                    console.log("Computer choice = PAPER");
                } else if (computerScore == 3) {
                    console.log("Computer choice = SCISSORS");
                }
            }
            let logHumanChoice = () => {
                if (humanScore == 1) {
                    console.log("Human choice = ROCK");
                } else if (humanScore == 2) {
                    console.log("Human choice = PAPER");
                } else if (humanScore == 3) {
                    console.log("Human choice = SCISSORS");
                } else {
                    console.log("Human choice = Not a valid choice! Try again.");
                }
            }
            logComputerChoice();
            logHumanChoice();

            // run both choices against each other and give an answer saying who won
            if (humanScore == 1 && computerScore == 3) {
                console.log ("HUMAN wins round " + i + " !");
                humanPoints = humanPoints + 1;
            } else if (computerScore == 1 && humanScore == 3) {
                console.log ("COMPUTER wins round " + i + " !");
                computerPoints = computerPoints + 1;
            } else if (humanScore == 2 && computerScore == 1) {
                console.log ("HUMAN wins round " + i + " !");
                humanPoints = humanPoints + 1;
            } else if (computerScore == 2 && humanScore == 1) {
                console.log ("COMPUTER wins round " + i + " !");
                computerPoints = computerPoints + 1;
            } else if (humanScore == 3 && computerScore == 2) {
                console.log ("HUMAN wins round " + i + " !");
                humanPoints = humanPoints + 1;
            } else if (computerScore == 3 && humanScore == 2) {
                console.log ("COMPUTER wins round " + i + " !");
                computerPoints = computerPoints + 1;
            } else if (humanScore == computerScore) {
                console.log ("it's a TIE!");
            }
        }
        playRound(humanScore, computerScore);
    }

    // log the final score
    console.log("*** Final Score ***");
    if (computerPoints > humanPoints) {
        console.log("*** COMPUTER WINS!!! ***")
        console.log("*** computer: " + computerPoints + " vs human:" + humanPoints + " ***")
    } else if (computerPoints < humanPoints) {
        console.log("*** HUMAN WINS!!! ***")
        console.log("*** computer: " + computerPoints + " vs human:" + humanPoints + " ***")
    } else {
        console.log("*** IT'S A TIE!!! ***")
        console.log("*** computer: " + computerPoints + " vs human: " + humanPoints + " ***")
    }
}

playGame(5); */

let computerPoints = 0;
let humanPoints = 0;
let humanScore = 0;
let computerScore = 0;

// event starters
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");

//scoreboards
let humanScoreBoard = document.querySelector("#human_score_board");
let computerScoreBoard = document.querySelector("#computer_score_board");
let statusScoreBoard = document.querySelector("#status_score_board");
let humanBoardPoints = document.querySelector("#human_board_points");
let computerBoardPoints = document.querySelector("#computer_board_points");

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function(e) {
        // get the computer's choice (randomly return one of three choices)
        let getComputerChoice = (min, max) => {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        };
        computerScore = getComputerChoice(1, 3);

        // get the human's choice
        let getHumanAnswer = () => {
            let answer = this.className.toUpperCase();
            if (answer == "ROCK") {
                return 1;
            } else if (answer == "PAPER") {
                return 2;
            } else if (answer == "SCISSORS") {
                return 3;
            }
        }
        humanScore = getHumanAnswer();

        // log choices
        let logComputerChoice = () => {
            if (computerScore == 1) {
                computerScoreBoard.innerHTML = "ROCK";
            } else if (computerScore == 2) {
                computerScoreBoard.innerHTML = "PAPER";
            } else if (computerScore == 3) {
                computerScoreBoard.innerHTML = "SCISSORS";
            }
        }
        let logHumanChoice = () => {
            if (humanScore == 1) {
                humanScoreBoard.innerHTML = "ROCK";
            } else if (humanScore == 2) {
                humanScoreBoard.innerHTML = "PAPER";
            } else if (humanScore == 3) {
                humanScoreBoard.innerHTML = "SCISSORS";
            }
        }
        logComputerChoice();
        logHumanChoice();

        // run both choices against each other and give an answer saying who won
        if (humanScore == 1 && computerScore == 3) {
            statusScoreBoard.innerHTML = "HUMAN wins this round!";
            humanPoints = humanPoints + 1;
        } else if (computerScore == 1 && humanScore == 3) {
            statusScoreBoard.innerHTML = "COMPUTER wins this round!";
            computerPoints = computerPoints + 1;
        } else if (humanScore == 2 && computerScore == 1) {
            statusScoreBoard.innerHTML = "HUMAN wins this round!";
            humanPoints = humanPoints + 1;
        } else if (computerScore == 2 && humanScore == 1) {
            statusScoreBoard.innerHTML = "COMPUTER wins this round!";
            computerPoints = computerPoints + 1;
        } else if (humanScore == 3 && computerScore == 2) {
            statusScoreBoard.innerHTML = "HUMAN wins this round!";
            humanPoints = humanPoints + 1;
        } else if (computerScore == 3 && humanScore == 2) {
            statusScoreBoard.innerHTML = "COMPUTER wins this round!";
            computerPoints = computerPoints + 1;
        } else if (humanScore == computerScore) {
            statusScoreBoard.innerHTML = "it's a TIE!";
            humanPoints = humanPoints + 1;
            computerPoints = computerPoints + 1;
        }

        let logScore = () => {
            humanBoardPoints.innerHTML = humanPoints;
            computerBoardPoints.innerHTML = computerPoints;
        }
        logScore();

        if (humanPoints == 5 && computerPoints < 5) {
            statusScoreBoard.innerHTML = "*** GAME OVER - HUMAN WINS!!! ***";
            humanPoints = 0;
            computerPoints = 0;
        } else if (humanPoints <= 5 && computerPoints == 5) {
            statusScoreBoard.innerHTML = "*** GAME OVER - COMPUTER WINS!!! ***";
            humanPoints = 0;
            computerPoints = 0;
        } else if (humanPoints == 5 && computerPoints == 5) {
            statusScoreBoard.innerHTML = "*** GAME OVER - it's a TIE! ***";
            humanPoints = 0;
            computerPoints = 0;
        }
    });
}