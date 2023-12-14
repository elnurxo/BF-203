enum VehicleType{
    Car,
    Motorcycle
};
enum EngineType{
    DOHC,
    SOHC,
    TURBO
}
type Capacity = 30 | 40 | 50 | 70 | 100; //literal type

interface IVehicle<T> {
    brandName: string;
    modelName: string;
    year: number;
    fuelCapacity: Capacity;
    currentFuel: T;
    mileage: number;
    fuelFor1KM: number;
    engine: EngineType;
    vehicleType: VehicleType;
    getInfo: () => void;
    drive: (km: number) => T;
}

class Car implements IVehicle<number> {
    //access modifier - public, private, protected
    brandName: string;  
    public modelName: string; 
    private _year: number;
    private _fuelCapacity: Capacity;
    private _currentFuel: number;
    private _mileage: number;
    private _fuelFor1KM: number;
    private _engine: EngineType;
    private _vehicleType: VehicleType;

    constructor(
        brandName: string,
        modelName: string,
        year: number,
        fuelCapacity: Capacity,
        currentFuel: number,
        mileage: number,
        fuelFor1KM: number,
        engine: EngineType,
        vehicleType: VehicleType
    ) {
        this.brandName = brandName;
        this.modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = vehicleType;
    }

    //getters (SOLID - encapsulation)
    get year(): number {
        return this._year;
    }

    get fuelCapacity(): Capacity {
        return this._fuelCapacity;
    }

    get currentFuel(): number {
        return this._currentFuel;
    }

    get mileage(): number {
        return this._mileage;
    }

    get fuelFor1KM(): number {
        return this._fuelFor1KM;
    }

    get engine(): EngineType {
        return this._engine;
    }

    get vehicleType(): VehicleType {
        return this._vehicleType;
    }

    getInfo(): void {
        console.log("Vehicle Information:", this.brandName, this.modelName, this.year);
    }

    drive(km: number): number {
        const fuelConsumed = km * this._fuelFor1KM;
        this._currentFuel -= fuelConsumed;
        return this._currentFuel;
    }
}

class Motorcycle implements IVehicle<number> {
    public brandName: string;
    public modelName: string;
    private _year: number;
    private _fuelCapacity: Capacity;
    private _currentFuel: number;
    private _mileage: number;
    private _fuelFor1KM: number;
    private _engine: EngineType;
    private _vehicleType: VehicleType;
    private _motorcycleType: string;

    constructor(
        brandName: string,
        modelName: string,
        year: number,
        fuelCapacity: Capacity,
        currentFuel: number,
        mileage: number,
        fuelFor1KM: number,
        engine: EngineType,
        vehicleType: VehicleType,
        motorcycleType: string,
    ) {
        this.brandName = brandName;
        this.modelName = modelName;
        this._year = year;
        this._fuelCapacity = fuelCapacity;
        this._currentFuel = currentFuel;
        this._mileage = mileage;
        this._fuelFor1KM = fuelFor1KM;
        this._engine = engine;
        this._vehicleType = vehicleType;
        this._motorcycleType = motorcycleType;
    }

    get year(): number {
        return this._year;
    }

    get fuelCapacity(): Capacity {
        return this._fuelCapacity;
    }

    get currentFuel(): number {
        return this._currentFuel;
    }

    get mileage(): number {
        return this._mileage;
    }

    get fuelFor1KM(): number {
        return this._fuelFor1KM;
    }

    get engine(): EngineType {
        return this._engine;
    }

    get vehicleType(): VehicleType {
        return this._vehicleType;
    }

    getInfo(): void {
        console.log("Vehicle Information:", this.brandName, this.modelName, this._year);
        console.log("Motorcycle Type:", this._motorcycleType);
    }

    drive(km: number): number {
        const fuelConsumed = km * this._fuelFor1KM;
        this._currentFuel -= fuelConsumed;
        return this._currentFuel;
    }

    startEngine(): void {
        console.log(`The ${this.brandName} ${this.modelName}'s engine is now running.`);
    }
}

// const motorcycle = new Motorcycle("Honda", "CBR500R", 2022, 30, 15, 25, 0.04, EngineType.DOHC, VehicleType.Motorcycle, "Sportbike");

// motorcycle.getInfo();
// console.log(motorcycle.drive(30));
// motorcycle.startEngine();


// const car = new Car("Toyota", "Camry", 2022, 50, 30, 20, 0.05, EngineType.DOHC, VehicleType.Car);

// car.getInfo();
// console.log(car.drive(50));


//TASK 2 ANIMALS
interface IAnimal {
    readonly name: string;
    readonly age: number;
    //method signature
    getInfo(): void;
}
abstract class Animal implements IAnimal {
    readonly name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }


    get age(): number {
        return this._age;
    }


    getInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this._age} years`);
    }
}
interface IBird {
    wingColor: string;
    fly(): void;
}
class Bird extends Animal implements IBird {
    wingColor: string;

    constructor(name: string, age: number, wingColor: string) {
        super(name, age);
        this.wingColor = wingColor;
    }

    fly(): void {
        console.log(`${this.name} is flying with ${this.wingColor} wings!`);
    }
}

enum LivePlace {
    Sea = "Sea",
    Ocean = "Ocean",
    River = "River",
}
type killType = string[] | string;
interface IKill<T extends killType> {
    kill: T;
}
// IFish interface
interface IFish extends IKill<killType> {
    livePlace: LivePlace;
    swim(): void;
    
}
class Fish extends Animal implements IFish {
    livePlace: LivePlace;
    kill: killType;

    constructor(name: string, age: number, livePlace: LivePlace, kill: killType) {
        super(name, age);
        this.livePlace = livePlace;
        this.kill = kill;
    }

    swim(): void {
        console.log(`${this.name} is swimming in the ${this.livePlace}`);
    }
}

const myFish = new Fish("Nemo", 1, LivePlace.Sea, ["small fish", "plankton"]);
myFish.getInfo();
myFish.swim(); 
console.log(myFish.kill);

const myBird = new Bird("Robin", 2, "red");
myBird.getInfo(); 
myBird.fly(); 