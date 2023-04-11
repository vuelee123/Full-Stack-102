// Prototypical Assignment

class Person {
    constructor (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = []
    }

}

let lee = new Person("Lee", "Vue", "Purple", 9, ['pho', 'eggrolls']);
let avis = new Person("Avis", "Yang", "Blue", 0, ['noodles']);
let nowen = new Person("Nowen", "Yang", "Green", 6, ['pizza']);
let paisli = new Person("Paisli", "Yang", "Pink", 7, ['pasta', 'pho']);

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
    return `${this.firstName} ${this.lastName}: Favorite Color: ${this.favoriteColor},
    Favorite Number: ${this.favoriteNumber}, Favorite Food: ${this.favoriteFoods}.`;
}
//  console.log(lee.toString());
//  console.log(paisli.toString());

Person.prototype.addToFamily = function (person) {
    if (person instanceof Person && !this.family.includes(person)) {
      this.family.push(person);
    }
    return this.family.length;
  };


console.log (nowen.toString())
console.log (lee.lastName)
console.log (avis.fullName());
console.log(avis.favoriteColor);
console.log(avis.toString());
console.log(nowen.toString());
console.log(lee.addToFamily(nowen));
console.log(lee.addToFamily(paisli));
console.log(lee.addToFamily(avis));