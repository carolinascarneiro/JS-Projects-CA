const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'error';
      break;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  console.log('Sleep Debt Calculator initiating...');
  
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed, actually ${(actualSleepHours - idealSleepHours)} extra!`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got less sleep than needed, actually ${(idealSleepHours - actualSleepHours)} less!`);
  } else {
      console.log('There was an error');
  }
  return 'Sleep Debt Calculator finished.';
}

console.log(calculateSleepDebt());