//TASK 1
// let text = 'banana_apple_kiwi';
// console.log(text.replaceAll('_','-'));

// TASK 2
// const toLower = (str) => str.toLowerCase();

// console.log(toLower('HEY'));

//TASK 3
// const toArray = function(input) {
//     return input.trim().split('');
// }
// console.log(toArray('   hey   '));

//TASK 4
// const LowerDashedString = (str)=> str.toLowerCase().replaceAll(' ','-');
// console.log(LowerDashedString('Robin Singh from USA'));

//TASK 5
// function Capitalize(str) {
//     return (str.charAt(0).toUpperCase()+str.slice(1));
// }

// console.log(Capitalize('my name is Joe'));

//TASK 6
// const CountUpperCase = function(str){
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]==str[i].toUpperCase() && str[i].trim()!='') {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(CountUpperCase('Hello   JS World')); //4

//TASK 7
// function IsFound(text,word) {
//     let result = {
//         IsFound: false,
//         index: -1
//     }
//     if (text.toLowerCase().trim().includes(word.toLowerCase().trim())) {
//         result.IsFound = true;
//         result.index =  text.indexOf(word);
//     }
//     return result;
// }
// console.log(IsFound('hello world','apple'));

//TASK 8
function Human(name, surname, birthYear, birthCity) {
  this.name = name;
  this.surname = surname;
  this.birthCity = birthCity;
  this.birthYear = birthYear;
  this.getFullName = function () {
    return this.name + " " + this.surname;
  };
}
const joe = new Human("Joe", "Smith", 1980, "Chicago");
const joe2 = new Human("Joe", "Beckham", 1980, "Chicago");
const jane = new Human("Jane", "Smith", 1984, "New York");
const adam = new Human("Adam", "Sandler", 1999, "Chicago");
let people = [];
people.push(joe,joe2, jane, adam);

let searchInput = prompt("search for human: ");

function searchHuman(search, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let fullName = arr[i].getFullName();
    if (
      arr[i].name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
      arr[i].surname
        .toLowerCase()
        .trim()
        .includes(search.toLowerCase().trim()) ||
      fullName.toLowerCase().trim().includes(search.toLowerCase().trim())
    ) {
      result.push(arr[i]);
    }
  }
  if (result.length) {
    return result;
  } else {
    return alert(`not found ${search}`);
  }
}

let resultArr = searchHuman(searchInput, people);
console.log(resultArr);
