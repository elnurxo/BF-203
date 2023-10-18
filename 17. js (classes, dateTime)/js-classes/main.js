// TASK - Animal Class-i yaradin. name,age property-leri ve speak method-u olsun. 
// speak method-u sadece (name makes noise) deye bir console cixarir

class Animal{
    #age;
    constructor(name,age){
        this.name = name;
        this.#age = age;
    }
    //methods
    speak(){
        console.log(`${this.name} makes noise`);
    }
}

//Cat ve Dog class-lariniz olsun. Ve her iksi animal class-indan miras alsin
//Cat-deki speak method-u -> (name meows)
//Dog-daki,owner property-si olsun. speak metodu ise -> (name barks)

class Cat extends Animal{
    speak(){
        super.speak();
        console.log(`${this.name} meows`);
    }
}
class Dog extends Animal{
    //properties
    owner;
    //constructor
    constructor(name,age,owner){
        super(name,age);
        this.owner = owner;
    }
    //methods
    speak(){
        console.log(`${this.name} barks`);
    }
}
const garfield = new Cat('Garfield',5);
const jack = new Dog('Jack',3,'Jane');

console.log(garfield);
console.log(jack);
garfield.speak();
jack.speak();

//Lion class-i olsun -> Cat
//speak -> Lion roars. (lion meows - lion makes noise)
const Lion =  class extends Cat{
    speak(){
        super.speak();
        console.log(`${this.name} roars`);
    }
}

const simba = new Lion('Simba',8);
simba.speak();
