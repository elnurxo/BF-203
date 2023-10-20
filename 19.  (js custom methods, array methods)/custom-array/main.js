// custom ForEach
Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this);
    }
}

//custom map
Array.prototype.myMap = function(callback){
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i],i,this))
    }
    return newArr;
}

Array.prototype.myFilter = function(callback){
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

Array.prototype.myFind = function(predicate){
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i],i,this)) {
            return this[i];
        }
    }
}

const students = [
    {
        id:1,
        name: 'Azer',
        age:21,
        GPA:4.3
    },
    {
        id:5,
        name: 'Azer',
        age:22,
        GPA:4.8
    },
    {
        id:2,
        name: 'Hemide',
        age:20,
        GPA:4.6
    },
    {
        id:3,
        name: 'Zeynal',
        age:22,
        GPA:3.4
    },
    {
        id:4,
        name: 'Ismayil',
        age:20,
        GPA:4.8
    }
];




// let numbers = [1,2,3,4];
// const filtered = numbers.find((item,idx,arr)=>item>2)
// console.log(filtered);
// const result = numbers.myMap((item,idx,arr)=>{
//     return item
// })
// console.log(result);

//for each geriye bir deyer qaytarmir
//for each parametr -> function (callback)
//callback parametr -> value,idx,arr