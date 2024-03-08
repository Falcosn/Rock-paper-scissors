



function playerSelection() 
{
  let player_Move = prompt("what do you play :rock paper scissors",).toLowerCase()
  let result; 
  
  if (player_Move === 'rock')
  {
    result = 'rock';
  }
  else if (player_Move === 'paper')
  {
    result = 'paper';
  }
  else if (player_Move === 'scissors')
  {
    result = 'scissors';
  }
  else
  {
    console.log("wrong try again")
    playerSelection();
  }

  return result
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

