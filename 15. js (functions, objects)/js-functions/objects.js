//car obyektiniz var
//brand, model, year,
//mileage 10500(probeg)
//fuelfor1KM - 1 km-e serf etdiyi benzin (5lt)
//fuelCapacity - maksimum benzin tutumu (15lt)
//currentFuel - hal-hazirdaki benzin (10lt)
// --- method
//increaseFuel(2) -> yoxlamalisiniz ki, elave olunan benzin fuelCapacity-ni ashirmi?
//eger ashmirsa, currentFuel artmalidir, eger ashirsa alert chixarin

//drive(km) -> 10km -> yoxlamalisiniz -> eger gede bilsem -> currentFuel->milage
//eger gede bilmese bir alert cixarin

const fusion = {
  brand: "Ford",
  model: "Fusion",
  mileage: 67000,
  fuelFor1KM: 10,
  fuelCapacity: 50,
  currentFuel: 20,
  year: 2016,
  isNew: false,
  increaseFuel: function (fuel) {
    if (fuel + this.currentFuel > this.fuelCapacity) {
      return alert("fuel capacity exceeded!");
    } else {
      this.currentFuel += fuel;
    }
  },
  drive(km) {
    // 
    if (this.currentFuel/this.fuelFor1KM < km) {
        return alert('not enough fuel!');
    }
    else{
        this.mileage += km;
        this.currentFuel -= (this.fuelFor1KM*km);
    }
  },
};

// console.log(fusion);
// fusion.increaseFuel(30);
fusion.drive(1)
console.log(fusion);
//#region Person Object
const person = {
  name: "Fatma",
  surname: "Quliyeva",
  birthYear: 2002,
  birthPlace: "Baku",
  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },
  findAge(currentYear) {
    return currentYear - this.birthYear;
  },
};
//#endregion
