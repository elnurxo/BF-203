//Human class-i var. 
//properties -> name,surname,#birthYear(private),birthPlace(object->city,country)
//methods -> getFullName metodu var. (name surname) qaytarir
//methods -> getAge metodu var. (date tipinde data yaradib currentYear-i tapib ona
//esasen age-i tapirsiniz ve return edirsini)
//getters -> age -> bu getter ise age-i qaytarir (human1.age deyende)
//getters -> fullName -> bu getter ise fullName-i qaytarir (human1.fullName deyende)
//static bir compare age metod-u var ve iki human object-i qebul edir ve kimin
//yashi boyukdurse hemin human object-ini qaytarir
//static bir compareSameBirthCity method-u olur ve 2 object qebul edir
//eger her iki insan eyni sheherde dogulubsa true, eks halda false qaytarir

//User class-i var. (Human-dan miras alir)
//User-de elave olaraq username,email,password,isLogged(boolean) deyerleri var
//isLogged default olaraq false-dur ve constructor-a gonderilmir
//Password default deyeri doguldugu sheherin ilk 2 herfi (boyuk herflerle)+dogum ilidir.
//Meselen birthPlace.city -> Baku, birthYear ise 20010-dirse default password
//BA2001 olmalidir
//login method-u var ve username ve password qebul edir ve eger username ve password
//dogru olarsa o zaman (welcome back fullName) alert-i cixarir ve hemin user-in
//isLogged deyerini true edir.
//eger yalnish olarsa o zaman (incorrect username or password) alert-i cixarir
//logOut metodu-u var onda ise eger user login olsubsa(yeni isLogged true-dursa)
//o zaman log out edir ve alert verir ki you logged out successfully
//ve isLogged deyerini false edir yeniden, eger isLogged deyer-i
//false idise (login olmamishdisa) o zaman alert return edirki (you didn't login)

class Human{
    name;
    surname
    birthPlace;
    #birthYear;
    constructor(name,surname,birthYear,birthPlace){
        this.name = name;
        this.surname = surname;
        this.#birthYear = birthYear;
        this.birthPlace = birthPlace;
    }

    //methods
    getFullName(){
        return (this.name+' '+this.surname);
    }
    getAge(){
        const currentYear = new Date().getFullYear();
        return (currentYear-this.#birthYear);
    }
    //getters
    get fullName(){
        return this.getFullName();
    }
    get age(){
        return this.getAge();
    }
    //static property
    static displayName = 'Human';
    //static methods
    static compareAge(obj1,obj2){
        if (obj1.age>obj2.age) {
            return obj1;
        }
        else{
            return obj2;
        }
    }
    static compareSameBirthCity(obj1,obj2){
        if (obj1.birthPlace.city===obj2.birthPlace.city) {
            return true;
        }
        else{
            return false;
        }
    }
}

class User extends Human{
    isLogged = false;
    #password;
    constructor(name,surname,birthYear,birthPlace,email,username,password){
        super(name,surname,birthYear,birthPlace);
        this.email = email;
        this.username = username;
        if (password===undefined) {
            //age
            const currentYear = new Date().getFullYear();
            const birthYear = currentYear - this.age;
            //default password generate
            const defaultPassword = this.birthPlace.city.slice(0,2).toUpperCase()+birthYear;
            this.#password = defaultPassword;
        }
        else{
            this.#password = password;
        }
    }
    //methods
    login(username,password){
        if (this.username === username && this.#password === password) {
            this.isLogged = true;
            return alert(`welcome back ${this.fullName}`);
        }
        else{
            return alert('wrong username or password');
        }
    }
    logout(){
        if (this.isLogged) {
            this.isLogged = false;
            return alert(`${this.username} logged out successfully!`);
        }
        else{
            return alert('you did not login! Login first');
        }
    }
}

const ferman = new User('Ferman','Xankishiyev',2004,{country:'Azerbaijan',city:'Baku'},'ferman@gmail.com','ferman123'); //BA2004
const nicat = new User('Nicat','Abdullazade',2003,{country:'Azerbaijan',city:'Moscow'},'nicat@gmail.com','nicat1','Admin123');

console.log(ferman);
console.log(nicat);

nicat.login('nicat1','Admin123')
nicat.logout();



