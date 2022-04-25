
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

// person1.fullName();

// person2.introduction();

// greet();


// person1.introduction();    //TypeError: person1.introduction is not a function


//borrowing a function, 
// person2.introduction.call(person1, "a", "info", true)

greet.call(person2, "hello gud morning welcome to TY ")

greet.call(person1, "hello gud morning welcome to TY ")


