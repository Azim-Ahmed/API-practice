class Person {

    constructor(firstName,lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person ("hero", "balam", 5000);
console.log(heroPerson);

function Personbai (first , second , salary){
    this.first = first
    this.second = second
    this.salary = salary
}
const topak = new Personbai()