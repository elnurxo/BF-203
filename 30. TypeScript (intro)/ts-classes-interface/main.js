var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Motorcycle"] = 1] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
;
var EngineType;
(function (EngineType) {
    EngineType[EngineType["DOHC"] = 0] = "DOHC";
    EngineType[EngineType["SOHC"] = 1] = "SOHC";
    EngineType[EngineType["TURBO"] = 2] = "TURBO";
})(EngineType || (EngineType = {}));
var Car = /** @class */ (function () {
    function Car(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType) {
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
    Object.defineProperty(Car.prototype, "year", {
        //getters (SOLID - encapsulation)
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        console.log("Vehicle Information:", this.brandName, this.modelName, this.year);
    };
    Car.prototype.drive = function (km) {
        var fuelConsumed = km * this._fuelFor1KM;
        this._currentFuel -= fuelConsumed;
        return this._currentFuel;
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, modelName, year, fuelCapacity, currentFuel, mileage, fuelFor1KM, engine, vehicleType, motorcycleType) {
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
    Object.defineProperty(Motorcycle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelCapacity", {
        get: function () {
            return this._fuelCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "currentFuel", {
        get: function () {
            return this._currentFuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "fuelFor1KM", {
        get: function () {
            return this._fuelFor1KM;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "vehicleType", {
        get: function () {
            return this._vehicleType;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.getInfo = function () {
        console.log("Vehicle Information:", this.brandName, this.modelName, this._year);
        console.log("Motorcycle Type:", this._motorcycleType);
    };
    Motorcycle.prototype.drive = function (km) {
        var fuelConsumed = km * this._fuelFor1KM;
        this._currentFuel -= fuelConsumed;
        return this._currentFuel;
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("The ".concat(this.brandName, " ").concat(this.modelName, "'s engine is now running."));
    };
    return Motorcycle;
}());
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this._age = age;
    }
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.getInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this._age, " years"));
    };
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying with ").concat(this.wingColor, " wings!"));
    };
    return Bird;
}(Animal));
var LivePlace;
(function (LivePlace) {
    LivePlace["Sea"] = "Sea";
    LivePlace["Ocean"] = "Ocean";
    LivePlace["River"] = "River";
})(LivePlace || (LivePlace = {}));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.livePlace = livePlace;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " is swimming in the ").concat(this.livePlace));
    };
    return Fish;
}(Animal));
var myFish = new Fish("Nemo", 1, LivePlace.Sea, ["small fish", "plankton"]);
myFish.getInfo();
myFish.swim();
console.log(myFish.kill);
var myBird = new Bird("Robin", 2, "red");
myBird.getInfo();
myBird.fly();
