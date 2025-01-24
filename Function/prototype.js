function Person() {

}
Person.prototype.name = 'Kevin';
const person = new Person();
// person.name = 'Kevin';
console.log(person.name)
console.log(person.__proto__ === Person.prototype);
console.log(Person === Person.prototype.constructor); // true
