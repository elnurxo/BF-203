//interfaces
interface IHuman{
    name: string;
    surname: string;
    age: number;
    getInfo: ()=>void;
}
interface IStudent<T>{
    groupName: string;
    hobbies: T;
    GPA: number;
    hasPassed: ()=>boolean;
}
interface IEmployee<T>{
    salary: number;
    skills: T,
    position: Position
}

//enums
enum Position{
    dev = 'developer',
    designer = 'designer',
    marketing = 'marketing',
    hr = 'hr'
}

//classes
abstract class Human implements IHuman{
    private _name: string;
    private _surname: string;
    public age: number;
    
    constructor(name: string,surname:string,age:number){
        this._name = name;
        this._surname = surname;
        if (age>0)
            this.age = age;
        else
            this.age = 0;
    }

    //getters
    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get fullName(){
        return (this._name + ' '+this._surname)
    }

    //methods
    getInfo():void{
        console.log(`${this.fullName} is ${this.age} years old`);
    }
}

class Student extends Human implements IStudent<string[]>{
    public groupName: string;
    private _GPA: number;
    public hobbies: string[];

    constructor(name: string,surname: string,age:number, groupName: string, GPA: number, hobbies: string[]){
        super(name, surname,age);
        this.groupName = groupName;
        if (GPA<0 || GPA>100) {
            this._GPA = 0;
        }
        else{
            this._GPA = GPA;
        }
        this.hobbies = hobbies;
    }

    get GPA(){
        return this._GPA;
    }
    set GPA(value:number){
        if (value>=0 && value<=100) {
            this._GPA = value;
        }
    }

    hasPassed():boolean{
        if (this._GPA<50) {
            return false;
        }
        else{
            return true;
        }
    }

    //method override
    getInfo(): void {
        console.log(`${this.fullName} studies in ${this.groupName} & has GPA:${this.GPA}`);
    }
}

class Employee extends Human implements IEmployee<string[]>{
    public salary: number;
    public skills: string[];
    position: Position;

    constructor(name:string,surname:string,age:number,salary:number,skills: string[],position:Position){
        super(name,surname,age);
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }

    getInfo(): void {
        console.log(`${this.fullName} is ${this.position} & get paid: ${this.salary}`);
    }
}

//student
let seid = new Student('Seid','Tagizade',20,'BF203',100,['basketball','video games']);
seid.getInfo();
console.log(seid.hasPassed());
//employee
let gurban = new Employee('Gurban','Gurbanzada',30,3000,['programming','blogging'],Position.dev);
gurban.getInfo();