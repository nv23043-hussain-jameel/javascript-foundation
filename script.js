function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors");

  while (true) {
    if (choice === null) {
        alert("Game aborted. Refresh the page to play again.");
        return null;
    }
    const lowerCaseChoice = choice.toLowerCase();
    if (["rock", "paper", "scissors"].includes(lowerCaseChoice)) {
        return lowerCaseChoice;
    }
    choice = prompt(`Invalid choice "${choice}". Please enter "rock", "paper", or "scissors":`);
  }
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const totalRounds = 5;

  console.log("Welcome to Rock Paper Scissors! Best of 5 rounds.");
  console.log("===============================================");

  function playRound(humanChoice, computerChoice) {
    console.log(`\nYou chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie this round!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 1; i <= totalRounds; i++) {
    console.log(`\n--- Round ${i} of ${totalRounds} ---`);
    const humanSelection = getHumanChoice();

    if (humanSelection === null) {
        console.log("Game aborted by user.");
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Score after round ${i}: You ${humanScore} - Computer ${computerScore}`);
    console.log(`--------------------`);
  }

  console.log("\n========== GAME OVER ==========");
  console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);

  let finalMessage;
  if (humanScore > computerScore) {
    finalMessage = "Congratulations! You won the game!";
  } else if (computerScore > humanScore) {
    finalMessage = "The computer won the game. Better luck next time!";
  } else {
    finalMessage = "The game ended in a tie!";
  }

  console.log(finalMessage);
  alert(finalMessage + `\nFinal Score: You ${humanScore} - Computer ${computerScore}`);
  console.log("==============================");
}

playGame();
