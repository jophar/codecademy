const getUserChoice = userImput => 
{
  userImput = userImput.toLowerCase();
  
  if(userImput === 'rock' || userImput === 'paper' || userImput === 'scisors') 
  {
    return userImput;
  } 
  
  else 
  { return console.log(`${userImput} is invalid`); }
}

/* 
 * console.log(getUserChoice('scisorss'));
 * Functions test
 * Da um erro e undifined, ver como ultrapassar
 */

const getComputerChoice = () => 
{
  const rpc = Math.floor(Math.random() * 3);
  switch (rpc)
  {
    case 0 : return 'rock';
    case 1 : return 'paper';
    case 2 : return 'scisors'
  }
}
/* Teste da funçao getComputerChoice
 * console.log(getComputerChoice());
 * working as intended
 */

const determineWinner = (userChoice, computerChoice) =>
{
  if(userChoice === computerChoice)
  {
    return 'tie';
  }
  else 
    if(userChoice === 'rock' && computerChoice === 'paper') 
    {
      return 'computer';
    }
    else
      if(userChoice === 'rock' && computerChoice === 'scisors')
      {
        return 'user';
      } else
          if(userChoice === 'paper' && computerChoice === 'rock')
          {
            return 'user'
          } else
            if(userChoice === 'paper' && computerChoice === 'scisors')
            {
              return 'computer';
            } else
              if(userChoice === 'scisors' && computerChoice === 'rock')
              {
                return 'computer';
              } else
                if(userChoice === 'paper' && computerChoice === 'paper')
                {
                  return 'user';
                }

}
console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
