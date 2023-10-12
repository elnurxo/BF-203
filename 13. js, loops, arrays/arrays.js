// arrays

// task 1-
// verilmish reqemler array-inin ededi ortasini tapin ([1,2,5,7,2,5,1]);
// let arr = [1,2,5,7,2,5,1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum+= arr[i];
    
// }

// console.log(Math.round(sum/arr.length));
// task 2-
// verilmish reqemler array-indeki en boyuk ve en kichik elementlerin ededi ortasini tapin

let arr = [1,5,7,2,5,1];
let max = arr[0];
let min = arr[0];

for(let i = arr[0]; i < arr.length; i++){
    if(max < arr[i]){
    max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log((min + max)/2)
//task 3-
//reqemler array-i var, hemin array-deki sade ededlerin sayini tapirsiniz.
//let numbers = [2,5,7,8,4,21]; //5,7,2 -> 3

// let numbers = []; //empty array
// let numbers2 = new Array(); //empty array


// console.log(numbers2.length);

// let numbers1 = [1,2,3]; //reference - 127845126
// let numbers2 = [2,3,4]; //reference - 127845121

// numbers1 = numbers2;
// numbers1[0] = 9;

// console.log(numbers2);

// let str = ["code","academy"];

// console.log(str[str.length-1][0]);

// let BF201 = ["Hemide","Ayan","Ali"];
// let BF203 = ["Ayan","Hemide","Fatma"];
// let count = 0;

// for (let i = 0; i < BF201.length; i++) { //3
//     for (let j = 0; j < BF203.length; j++) {
//         if (BF201[i]==BF203[j]) {
//             count++;
//         }
//     }
// }
// console.log(count);

