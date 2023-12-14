"use strict";
//enums
var Position;
(function (Position) {
    Position["dev"] = "developer";
    Position["designer"] = "designer";
    Position["marketing"] = "marketing";
    Position["hr"] = "hr";
})(Position || (Position = {}));
//classes
class Human {
    constructor(name, surname, age) {
        this._name = name;
        this._surname = surname;
        if (age > 0)
            this.age = age;
        else
            this.age = 0;
    }
    //getters
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get fullName() {
        return (this._name + ' ' + this._surname);
    }
    //methods
    getInfo() {
        console.log(`${this.fullName} is ${this.age} years old`);
    }
}
class Student extends Human {
    constructor(name, surname, age, groupName, GPA, hobbies) {
        super(name, surname, age);
        this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            this._GPA = 0;
        }
        else {
            this._GPA = GPA;
        }
        this.hobbies = hobbies;
    }
    get GPA() {
        return this._GPA;
    }
    set GPA(value) {
        if (value >= 0 && value <= 100) {
            this._GPA = value;
        }
    }
    hasPassed() {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    }
    //method override
    getInfo() {
        console.log(`${this.fullName} studies in ${this.groupName} & has GPA:${this.GPA}`);
    }
}
class Employee extends Human {
    constructor(name, surname, age, salary, skills, position) {
        super(name, surname, age);
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }
    getInfo() {
        console.log(`${this.fullName} is ${this.position} & get paid: ${this.salary}`);
    }
}
//student
let seid = new Student('Seid', 'Tagizade', 20, 'BF203', 100, ['basketball', 'video games']);
seid.getInfo();
console.log(seid.hasPassed());
//employee
let gurban = new Employee('Gurban', 'Gurbanzada', 30, 3000, ['programming', 'blogging'], Position.dev);
gurban.getInfo();
