//#region User Class
// class User {
// username = '';
//   #password;
//   constructor(email, username, password) {
//     this.email = email;
//     this.username = username;
//     this.#password = password;
//   }
//   // Method
//   login(username,password) {
//     if (this.username == username && this.#password == password) {
//         return alert('welcome')
//     }
//     else{
//         return alert('incorrect username or password!')
//     }
//   }
// }

// const elnurxo = new User("elnur@gmail.com", "elnurxo", "Admin123");

// elnurxo.login('elnurxo','Admidn123')
// console.log(elnurxo.password);
//#endregion

//class Product class-i var (name,costPrice,salePrice,isDiscounted,discountPercentage)
//getProfit method - geliri tapmalidir
//salePrice,costPrice, discountPercentage default olaraqsifir olsun
//isDiscounted default olaraq false olsun
//optional - costPrice private property olsun
//bu class-dan istifade edib bir neche object yaradin ve onlarin profit-ini tapin

class Product {
  #costPrice;
  constructor(
    name,
    costPrice = 0,
    salePrice = 0,
    isDiscounted = false,
    discountPercentage = 0
  ) {
    this.name = name;
    this.#costPrice = costPrice;
    this.salePrice = salePrice;
    this.isDiscounted = isDiscounted;
    this.discountPercentage = discountPercentage;
  }
  getProfit() {
    if (!this.isDiscounted) {
      return this.salePrice - this.#costPrice;
    } else {
      let result =
        this.salePrice -
        ((this.salePrice * this.discountPercentage) / 100) -
        this.#costPrice;
      return result;
    }
  }
}
const jacket = new Product("Bershka jacket", 50, 180, true, 50);
console.log(jacket.getProfit());