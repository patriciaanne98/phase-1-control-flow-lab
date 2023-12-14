function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
      const scuberGreetingForFeet = 'This one is on me!';
      return scuberGreetingForFeet;
    } else if (feet > 400 && feet <= 2000) {
      const scuberGreetingForFeet = 'That will be twenty bucks.';
      return scuberGreetingForFeet;
    } else if (feet > 2000 && feet <= 2500) {
      const scuberGreetingForFeet = 'I will gladly take your thirty bucks.';
      return scuberGreetingForFeet; 
    } else {
      const scuberGreetingForFeet = 'No can do.';
      return scuberGreetingForFeet;
    }
  }
function ternaryCheckCity(city){
  if (city === 'NYC') {
    const ternaryCheckCity = 'Ok, sounds good.';
    return ternaryCheckCity;
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    let switchOnCharmFromTip = 'Thank you so much.';
    return switchOnCharmFromTip;
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    let switchOnCharmFromTip = 'Bye.';
    return 'Bye.';
  }
  }