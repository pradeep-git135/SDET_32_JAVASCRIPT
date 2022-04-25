//declaration of an array

let arr1 = new Array(5)  //not recommended  [5]

// console.log(arr1);

//2 way of declaring an array

let ref_obj = {a:1, b:2}

let arr2 = [10,, 20, 30, ,"msg", "info", true, [10, 100, "msg"], ,ref_obj ];
let arr3 = [5]
// console.log(arr2);
// console.log(arr3);
console.log("======================for-loop============================");

for (let index = 0; index < arr2.length; index++) {
    console.log(index +" : "+ arr2[index]);
}
console.log("======================while-loop============================");
let index = 0;
// while (index < arr2.length) {
//     console.log(index +" : "+ arr2[index]);
//     index ++
// }

console.log("===================de_while-loop===============================");
// do {
//     console.log(index +" : "+ arr2[index]);
//     index++
// } while (index < arr2.length);

console.log("======================for-in============================");
for (const index in arr2) {
   console.log(index +" : "+arr2[index]);
}
console.log("======================for-of============================");

for (const element of arr2) {
    console.log(element);
}