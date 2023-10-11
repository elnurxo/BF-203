let age = Number(window.prompt("enter your age"));
let ticketPrice = 10;

if (age > 18) {
  let personCount = Number(window.prompt("how many person"));
  let balance = Number(window.prompt("enter your balance"));
  if (balance > ticketPrice*personCount) {
    balance -= ticketPrice*personCount;
    window.alert(`your balance is ${balance} `);
  } else {
    window.alert("your balance is not enough");
  }
} else if (age == 18) {
    let  personCount=Number(window.prompt("how many person"))
  let balance = Number(window.prompt("enter your balance"));
  if (balance > (ticketPrice / 2)*personCount) {
    balance -= (ticketPrice / 2)*personCount;
    window.alert(`your balance is ${balance} `);
  } else {
    window.alert("your balance is not enough");
  }
} else {
  window.alert("your age is not enough");
}
