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
var motorcycle = new Motorcycle("Honda", "CBR500R", 2022, 30, 15, 25, 0.04, EngineType.DOHC, VehicleType.Motorcycle, "Sportbike");
motorcycle.getInfo();
console.log(motorcycle.drive(30));
motorcycle.startEngine();
var car = new Car("Toyota", "Camry", 2022, 50, 30, 20, 0.05, EngineType.DOHC, VehicleType.Car);
car.getInfo();
console.log(car.drive(50));
