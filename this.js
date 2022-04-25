
//globally
console.log(this);

console.log("======================inside function======================");

function sample() {
    // inside function
    console.log(this);
}
sample()

let person =  {
    fname : "C R",
    lname : "Pradeep",
    introduction : function () {
        console.log(this);   //person
        let self = this
        function inner() {
            console.log(self);  //window
        }
        inner()
    }
}
console.log("======================inside object======================");
person.introduction()

