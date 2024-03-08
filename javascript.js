 
// const result = playRound(computerSelection, playerSelection)

function playerChoice() 
{
  let playerMove = prompt("what do you play \nrock paper scissors").toLowerCase()
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
    console.log("wrong try again");
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


function playRound() 
{
  let result; 
  const computer = getComputerChoice()
  const player = playerChoice()

  if (computer === player)
  {
    result = "its a tie";
    //ties++;
  }
  else if (player === 'rock' && computer === 'paper')
  {
    result = "you win";
   // wins++;
  }
  else if (player === 'paper' && computer === 'rock')
  {
    result = "you win";
   // wins++;
  }
  else if (player === 'scissors' && computer === 'paper')
  {
    result = "you win";
   // wins++;
  }
  else
  {
    result = "you lost";
   // losses++;
  }

  alert(`computer chosen ${computer} you chosen ${player} so ${result}`)
 
  return result;
}

function playGame()
{
  let wins = 0;
  let losses = 0;
  let ties = 0;

  for (round = 1; round <= 5; round++)
  {
    let result = playRound()

    if (result == 'you win')
    {
      wins++
    }
    else if (result == 'you losses')
    {
      losses++
    }
    else
    {
      ties++
    }
  }
    console.log(`wins : ${wins} \nlosses : ${losses} \nties : ${ties}`)


}

playGame()

