//object fields, object properties
// let carQuantity = Number(prompt("enter car quantity: "));
// while (isNaN(carQuantity) || carQuantity.trim()=="") {
//     alert("wrong format!");
//     carQuantity = Number(prompt("try again: "));
// }
// let cars = [];
// for (let i = 0; i < carQuantity; i++) {
//     //name
//     let carName = prompt(`Enter name of car #${i+1}`);
//     //year
//     let carYear = Number(prompt(`Enter year of car #${i+1}`));
//     //price
//     let carPrice = Number(prompt(`Enter price of car #${i+1}`));

// const { log } = require("console");

//     let car = {
//         name: carName,
//         year: carYear,
//         price: carPrice
//     }
//     cars.push(car);
// }
// for (let i = 0; i < cars.length; i++) {
//     alert(`car name: ${cars[i].name}\n car year:${cars[i].year}\n car price:${cars[i].price}`)
// }


//employees array-i var
//employee object-lerinden ibaretdir
//employee object-inin fullname,salary,department(IT,HR,Finance,Marketing),age,isMarried,isMale

let employees = [];
let emp1 = {
    fullname: 'Joe Biden',
    salary: 4000,
    department: 'Finance',
    age: 64,
    isMarried: true,
    isMale: true
};
let emp6 = {
    fullname: 'Joe Biden',
    salary: 4000,
    department: 'Finance',
    age: 68,
    isMarried: true,
    isMale: true
};
let emp2 = {
    fullname: 'Adam Sandler',
    salary: 6000,
    department: 'IT',
    age: 45,
    isMarried: false,
    isMale: true
};
let emp3 = {
    fullname: 'Natasha Medvedev',
    salary: 2400,
    department: 'IT',
    age: 35,
    isMarried: false,
    isMale: false
};
let emp4 = {
    fullname: 'Ali Aliyev',
    salary: 900,
    department: 'Finance',
    age: 42,
    isMarried: false,
    isMale: true
};
let emp7 = {
    fullname: 'Vali Aliyev',
    salary: 900,
    department: 'It',
    age: 39,
    isMarried: false,
    isMale: true
};
let emp5 = {
    fullname: 'Jane Smith',
    salary: 1200,
    department: 'Finance',
    age: 34,
    isMarried: true,
    isMale: false
};
employees.push(emp1,emp2,emp3,emp4,emp5,emp7);
console.log(employees);

//1-task -> maash ortalamasini tapin
// let total=0;
// for(let i=0;i<employees.length;i++){
//     total+=employees[i].salary;
// }
// console.log(total/employees.length)


//2-task -> kishilerin sayini tapin
// let count = 0
// for(let i = 0; i < employees.length; i++){
//     if(employees[i].isMale){
//         count++
//     }
// }
// console.log(count);
//3-cu task -> yashi 60-dan boyuk olanlari ishden cixarin (splice)
// for(let i=0; i<employees.length; i++){
//     if(employees[i].age>60){
//         employees.splice(i,1)
//     }
// }
// console.log(employees);
//4-cu task -> evli olanlar-in fullname-lerini alert-e cixarin

// for(let i = 0;  i <  employees.length;  i++){
//     if(employees[i].isMarried){
//         alert(employees[i].fullname)
//     }
// }




//5-ci task -> maashi 1000-den ashagi olanlarin maashina 500 dollar gelin elave
// for(let i = 0;  i <  employees.length;  i++){
//     if(employees[i].salary<1000) {
//         employees[i].salary+=500
//     }
// }
// console.log(employees)

//6ci task -> IT department-den olanlari bashqa array-e yigin
// let itDepartment = []
// for(let i = 0;  i <  employees.length;  i++){
//     if(employees[i].department=="IT"){
//         itDepartment.push(employees[i])
//     }
// }
// console.log(itDepartment)
//7-ci task -> Finance department-indeki en cox maash alan ishcini tapin

// let max=employees[0].salary;
// for(let i=0; i<employees.length; i++){
//     if(employees[i].department=="Finance" && max<employees[i].salary){
        
//             max=employees[i].salary
        

//     }

// }
// for(let i=0; i<employees.length; i++){
//     if(employees[i].salary==max && employees[i].department=="Finance"){
//         alert(employees[i].fullname)
//     }
// }


//8-ci task -> Umumi shirket-deki en az maash alanin maashini 3000 dollar artirin
// let min = employees[0].salary;

// //find min salary
// for(let i=1;i<employees.length;i++){
//     if(employees[i].salary<min){
//         min=employees[i].salary

//     }
// }
// for(let i=0;i<employees.length ;i++){
//     if(min==employees[i].salary){
//         employees[i].salary+=3000
//         // break;
//     }
// }
// console.log(employees);