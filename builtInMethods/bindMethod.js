let person1 = {
    fname : "C R",
    lname : "Pradeep",
    fullName : function () {
        console.log(this.fname + " "+  this.lname);
    }
}

let person2 = {
    fname : "Pankaj",
    lname : "Chauhan",
    introduction : function (x, y, z) {
        console.log("hello all myself "+this.fname+" "+this.lname);
        console.log(x, y, z);
    }
}

function greet(greetMsg) {
    console.log(greetMsg+this.fname+" "+this.lname);
}

let returnValue = greet.bind(person2, "hello gud morning welcome to TY ")
returnValue()

//function currying

function sum(a, b) {
    console.log(a+b);
}
let add10 = sum.bind(this,10)
add10(12);