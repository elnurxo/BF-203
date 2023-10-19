class Human{
    _birthYear; //protected
    constructor(name,surname,birthYear) {
        this.name = name;
        this.surname = surname;
        this._birthYear = birthYear;
    }
}

//visibity - public, private, protected

class User extends Human{
    #password;
    constructor(name,surname,birthYear,username,password) {
        super(name,surname,birthYear);
        this.username = username;
        if (!password) {
            const defaultPassword = this.name.slice(0,3).toUpperCase()+this._birthYear;
            this.#password = defaultPassword;
        }
        else{
            this.#password = password;
        }
    }
}

const joe22 = new User('Joe','Smith',1999,'joe22');
console.log(joe22);

