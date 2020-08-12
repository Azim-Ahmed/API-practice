const normalperson = {
    firstName : "jamila",
    lastName :  "ahmed",
    salary : 15000,

    getFullName : function(){
        console.log(this.firstName ,  this.lastName);
    },
    getBill : function(amount){
        // console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName : "hero",
    lastName : "kalam",
    salary : 40000

}
const dudePerson = {
    firstName : "hero",
    lastName : "vai",
    salary : 40000

}
//normalperson.getBill();

const heroBill = normalperson.getBill.bind(heroPerson);
// heroBill(2000);
// heroBill(2000);

const dudeBill = normalperson.getBill.bind(dudePerson);
console.log(dudeBill(3000));
console.log(heroBill(21000));

