function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  }
}

basicTeenager(17);

function teenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!";

  } else {

      return "You are not a teenager";
    }
}
teenager(30);


function ageChecker(age) {

  if (age >= 13 && age <= 19) {

      return "You are a teenager!";

    } else if (age < 13) {

      return "You are a kid";

    } else {

      return "You are a grownup";
    }

}

ageChecker(30);

function ternaryTeenager(age) {
  if (age >= 13 && age <=19) {
   return (age? "You are a teenager":"You are not a teenager");
 } else { return ("You are not a teenager")}
}

(ternaryTeenager(27));


function switchAge(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        return "You are a teenager";
      default:
          return "You have an age"; }
}
