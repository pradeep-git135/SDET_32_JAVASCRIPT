let clasAnother = require("./../es6Features/anotherClass")
let instB = require("./../es6Features/class")

console.log(instB);

class ExternalC extends clasAnother{
    demo(){
        instB.displayParentMethod()
    }
}
let obj_c = new ExternalC()
obj_c.demo()
console.log(obj_c.z);

// console.log(obj_c.a);