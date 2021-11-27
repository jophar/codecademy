const getSleepHours = day =>
{
  day = day.toLowerCase();
  switch (day)
  {
    case 'monday'   : return 8;
    case 'tuesday'  : return 6;
    case 'wednesday': return 8;
    case 'thursday' : return 5;
    case 'friday'   : return 5;
    case 'saturday' : return 9;
    case 'sunday'   : return 7;
    default : return 'invalid day';
  }
}

/* 
 * console.log(getSleepHours('tuesday'));
 * Test if the day returns right
 * Working
 */

const getActualSleepHours = () =>
{
  return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));
}

/* 
 * console.log(getActualSleepHours());
 * Test if it calculates right
 * Working
 */

const getIdealSleepHours = () =>
{
  let idealHours = 7;
  return idealHours * 7;
}

/*
 * console.log(getIdealSleepHours());
 * Test of the function
 * Working
 */

const calculateSleepDebt = () =>
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours  = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours)
  {
    console.log(`You sleep the perfect ammount of ${actualSleepHours} hours`); 
  }
    else 
      if(actualSleepHours > idealSleepHours)
      {
        console.log(`Heyy... You slept too much this week!`)
      } 
        else 
        {
          const debt = idealSleepHours - actualSleepHours;
          console.log(`You are in debt of ${debt} hours of sleep`);
        }
}

calculateSleepDebt();
