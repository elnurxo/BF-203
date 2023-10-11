//enter month number
//output the season name
let month =Number(prompt(" Enter month number "));
switch (month) {
  case 1:
  case 2:
  case 12:
    alert(`winter`);
    break;
  case 3:
  case 4:
  case 5:
    alert(`spring`);
    break;
  case 6:
  case 7:
  case 8:
    alert(`summer`);
    break;
  case 9:
  case 10:
  case 11:
    alert(`autumn`);
    break;

  default:
    alert(`invalid input`)
    break;
}

