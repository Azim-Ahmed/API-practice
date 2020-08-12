const normalperson = {
    firstName : "jamila",
    lastName :  "ahmed",
    salary : 15000,

    getFullName : function(){
        console.log(this.firstName ,  this.lastName);
    },
    getBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
console.log(normalperson.lastName);
 normalperson.getBill(100);
 normalperson.getBill(1000);
 console.log(normalperson.salary);
