
// let a = 10;
// let z = "pradeep"

// function display() {
//     console.log(a);
//     let b = 20;
//     function inner() {
//         let c = 100;
//         console.log(b);
//         console.log(c);
//         console.log(z);
//     }
//     inner()
// }
// display()                   //10

// console.log(b);           //ReferenceError: b is not defined


function outer(a) {
    return function inner(b) {
        return a+b
    }
}
add10 = outer(10)
console.log(add10(20));