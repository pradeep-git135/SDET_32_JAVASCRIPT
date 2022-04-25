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

greet.apply(person2, ["hello gud morning welcome to TY "])

person2.introduction.apply(person1, ["hello", 24,  false])