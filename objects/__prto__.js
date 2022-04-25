let person1 = {
    fname : "C R",
    lname : "Pradeep",
    fullName : function () {
        console.log(this.fname + " "+  this.lname);
    }
}

let person2 = {};

person2.__proto__ = person1

console.log(person2);

