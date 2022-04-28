
let arr = [10, 20, 30, 40, 50]

console.log(...arr);    // ... with arr ref acts as spread operater

let [a, b, ...c] = arr
console.log(a, b, c);   // ... here acts as rest operater

function rest(a, b, ...c) {
    console.log(a, b, c);
}
rest("x", "y", "z", "p", "q", "r")

console.log("=========================================");
function spread(a, b) {
    console.log(a, b);
}
let externalArr = ["x", "y", "z", "p", "q", "r"]
spread(...externalArr)