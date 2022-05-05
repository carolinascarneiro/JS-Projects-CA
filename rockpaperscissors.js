const getUserChoice = userInput => {
  userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("there was an error");
  }
}

const getComputerChoice = () => {
  const pcChoice = Math.floor(Math.random() * 3);
  switch (pcChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'error';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
    return 'the user won';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won';
    } else {
      return 'the user won';
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice + " " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();