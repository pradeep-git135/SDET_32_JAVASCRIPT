// console.log(x);     //ReferenceError: x is not defined
console.log(a); //  undefined                                  //undefined, error, veriable not found, veriable not declared 
var a = 10;
console.log(a);  //10
var b = 20;

a1()                 //this statement is from a1

function a1() {
    console.log("this statement is from a1");
}

a2()

var a2 = function () {
    console.log("this statement is from a2");
}

