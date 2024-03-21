
let wins = 0;
let losses = 0;
let ties = 0;
let round = 1;

const buttonRock = document.querySelector('#rock')
const buttonPaper = document.querySelector('#paper')
const buttonScissors = document.querySelector('#scissors')

const score = document.querySelector('#score')

const roundUI = document.querySelector('#round')
const roundWinner = document.querySelector('#round-announce')

const gameWinner = document.querySelector('#game-announce') 

const moves = document.querySelector('#game-moves') 

buttonRock.addEventListener("click", () => {
  playGame('rock');
})

buttonPaper.addEventListener("click", () => {
  playGame('paper');
})

buttonScissors.addEventListener("click", () => {
  playGame('scissors');
})


score.textContent = `Wins : ${wins} Losses : ${losses} Ties : ${ties}`;
roundUI.textContent = `Round Number: ${round}`


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


function playGame(player) 
{
  let result; 
  const computer = getComputerChoice()
  
  if (round <= 5) { 
    // count to 5. if tie subtract 1. sets result and count score
    if (computer === player) 
    {
      result = "Its a Tie, try again";
      ties++;
      round--;
    }
    else if (player === 'rock' && computer === 'scissors')
    {
      result = "You Win The Round";
      wins++;
    }
    else if (player === 'paper' && computer === 'rock')
    {
      result = "You Win The Round";
      wins++;
    }
    else if (player === 'scissors' && computer === 'paper')
    {
      result = "You Win The Round";
      wins++;
    }
    else
    {
      result = "Computer Win The Round";          
      losses++;
    }
    // tell what moves are picked
    moves.textContent = `Computer picked ${computer}. You picked ${player}`
    round++;
    // if round is not 6 sets a number round
    if (round != 6) // probably dumb but i don't know how to do ti better 
    {
      roundUI.textContent = `Round Number: ${round}`
    }
    // if round is 6 sets game winner
    else
    {
      if (wins > losses)
      {
        gameWinner.textContent = 'You Win The Game'
      }
      else 
      {
        gameWinner.textContent = 'Computer Win The Game'
      }
    }
    // sets round winner
    roundWinner.textContent = result;
  }
  
     
  
  
  score.textContent = `Wins : ${wins} Losses : ${losses} Ties : ${ties}`;
}


