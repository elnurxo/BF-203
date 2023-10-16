//functions
//function constructor
//object - methods

//functions
//regular, anonym, arrow
// function Sum(num1=0, num2=0) {
//   if (num1 > 0 && num2 > 0) {
//     return num1 + num2;
//   } else {
//     return num1 * num2;
//   }
// }

// let result = Sum(7); //arguments, function invoke, call
// console.log(`result: ${result}`); //undefined

// function Calculate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     case "%":
//       return num1 % num2;
//     case "**":
//       return num1 ** num2;
//     default:
//       return "invalid operator";
//   }
// }

// console.log(Calculate(4, 5, "*")); //20
// console.log(Calculate(5, 2, "-")); //3
// console.log(Calculate(36, 6, "/")); //6
// console.log(Calculate(36, 6, "+")); //42
// console.log(Calculate(36, 6, "%")); //42

//ternary if operator
// SumArrow(2,4);

function Sum(num1, num2) {
  if (num1 > 0 && num2 > 0) return num1 + num2;
  else return num1 * num2;
}

const SumArrow = (num1, num2) =>
  num1 > 0 && num2 > 0 ? num1 + num2 : num1 * num2;

const SumAnonym = function (num1, num2) {
  return num1 + num2;
};

// this, arguments
// function Human(fullname, age, gender) {
//     this.fullname = fullname;
//     this.age = age;
//     this.gender = gender;
// }

// let human1 = new Human('Ali Aliyev',45,'male');
// console.log(human1);

// car object
// function Car(model, brand, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const car1 = new Car('X5','BMW',2021);

// const car = {
//   brand: "BMW",
//   model: "X5",
//   year: 2012,
//   mileage: 50300,
//   getInfo(){
//     return `brand: ${this.brand} \nmodel: ${this.model}`;
//   },
// };

// console.log(car.getInfo());

//TASK 1 - Daxil edilmish ededin sade/murekkeb olmasini tapin. Eger sadedirse true, murekkebdirse
// false qaytarmalidir.1-dirse 0 return edin

// console.log(IsPrime(89)); //true
// console.log(IsPrime(125)); //false
// console.log(IsPrime(23)); //0

//regular
function IsPrime(x) {
  let count = 0;
  if (x == 1) {
    return 0;
  } else {
    for (let i = 1; i <= x; i++) {
      if (x % i == 0) {
        count++;
      }
    }
    if (count > 2) {
      return false;
    } else {
      return true;
    }
  }
}

let arr = [7,6,5,4,8,89,48];

const PrimeQuantity = function(numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (IsPrime(numbers[i])) {
            count++;
        }
    }
    return count;
}
