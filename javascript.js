
const computerSelection = getComputerChoice()
const playerSelection = playerChoice() 
const result = playGame(computerSelection, playerSelection)

function playerChoice() 
{
  let playerMove = prompt("what do you play \nrock paper scissors",).toLowerCase()
  let result; 
  
  if (playerMove === 'rock')
  {
    result = 'rock';
  }
  else if (playerMove === 'paper')
  {
    result = 'paper';
  }
  else if (playerMove === 'scissors')
  {
    result = 'scissors';
  }
  else
  {
    console.log("wrong try again")
    playerChoice();
  }

  return result;
}


function getComputerChoice ()
{
  let result;
  let random_num = Math.random() 

  if (random_num <= 1/3)
  {
    result = 'rock';
  }
  else if (random_num > 1/3 && random_num <= 2/3)
  {
    result = 'paper';
  }
  else if (random_num > 2/3 && random_num <= 1) 
  {
    result = 'scissors';
  }
 
  return result;
}


function playGame(computer, player) 
{
  let result; 

  if (computer === player)
  {
    result = "its a tie"
  }
  else if (player === 'rock' && computer === 'paper')
  {
    result = "you win"
  }
  else if (player === 'paper' && computer === 'rock')
  {
    result = "you win"
  }
  else if (player === 'scissors' && computer === 'paper')
  {
    result = "you win"
  }
  else
  {
    result = "you lost"
  }

  return result;
}

alert(`computer chosen ${computerSelection} you chosen ${playerSelection} so ${result}`)
console.log(`computer chosen ${computerSelection} you chosen ${playerSelection} so ${result}`)