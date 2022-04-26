// //declaration of an array

// let arr1 = new Array(5)  //not recommended  [5]

// // console.log(arr1);

// //2 way of declaring an array

// let ref_obj = {a:1, b:2}

// let arr2 = [10,, 20, 30, ,"msg", "info", true, [10, 100, "msg"], ,ref_obj ];
// let arr3 = [5]
// // console.log(arr2);
// // console.log(arr3);
// console.log("======================for-loop============================");

// for (let index = 0; index < arr2.length; index++) {
//     console.log(index +" : "+ arr2[index]);
// }
// console.log("======================while-loop============================");
// let index = 0;
// // while (index < arr2.length) {
// //     console.log(index +" : "+ arr2[index]);
// //     index ++
// // }

// console.log("===================de_while-loop===============================");
// // do {
// //     console.log(index +" : "+ arr2[index]);
// //     index++
// // } while (index < arr2.length);

// console.log("======================for-in============================");
// for (const index in arr2) {
//    console.log(index +" : "+arr2[index]);
// }
// console.log("======================for-of============================");

// for (const element of arr2) {
//     console.log(element);
// }

let arr = [1, 11, 111, 10, 100,50, 500, 30, 300, 40, 20, 40]

// console.log(arr.lastIndexOf(40,10));  //9
// join()==>Adds all the elements of an array into a string, separated by the specified separator string.
// console.log((arr.join()));


//concat
// console.log(arr.concat(["a", "b", "c", "d"]));
// console.log(arr);


//indexOf() Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(arr.indexOf(140));

//includes()  Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(arr.includes(50));
// console.log(arr.includes(500));


//push() ==>Appends new elements to the end of an array, and returns the new length of the array.
// console.log(arr.push(60, 70));
// console.log(arr);


//pop ==>Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr.pop());  //50
// console.log(arr);    //[10, 20, 30, 40]


//unshift ==> Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr.unshift(0, 5));
// console.log(arr);

//shift ==> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(arr.shift());
// [console.log(arr)]


//splice() ==>Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(arr.splice(2,0,[25,35, 45]));
// console.log(arr);

//every() ==> Determines whether all the members of an array satisfy the specified test.
// console.log(arr.every((element)=>{
//     return element>10    //[false, true, true, true, true]
// }));

//some == > Determines whether the specified callback function returns true for any element of an array.
// console.log(arr.some((element)=>{
//     return element>40
// }));


// forEach() ==>Performs the specified action for each element in an array. implemented by map
// arr.forEach((element, index)=>{
//     // console.log(element +" : "+ index);
//     console.log(element*2);
// })


//map() ==> calls a defined callback function on each element of an array, and returns an array that contains the results.
// console.log(arr.map((element, index)=>{
//     return element*2
// }));

// console.log(arr);


//filter ==> Returns the elements of an array that meet the condition specified in a callback function.
// console.log(arr.filter((element, index)=>{
//     return element>20
// }));

//sort() ==>Sorts an array in place. This method mutates the array and returns a reference to the same array
// console.log(arr.sort((a,b)=>{
//     return b-a   //  >0  b comes first
//                     // <0 a comes first
//                     // 0 a and b as it is
// }));


//reduce ==> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// console.log(arr.reduce((sum,b)=>{
//     sum = sum + b
//     return sum
// },0));

//even array
// console.log(arr.reduce((evenArray, element)=>{
//     if (element%2 == 0) {
//         evenArray.push(element)
//     }
//     return evenArray
// }, []));

let Amazon = [
    {productName : "RedmiNote10Pro", poductPrice : 15000},
    {productName : "GalaxyA53", poductPrice : 35000},
    {productName : "RealmeNeo3", poductPrice : 30000},
    {productName : "Iphone12ProMax", poductPrice : 121000}
]
console.log(Amazon.reduce((countArray, element)=>{
    if (!(countArray[element.productName])) {
        countArray[element.productName] = 1
    }
    else{
        countArray[element.productName]++
    }
    return countArray
}, {}));

// console.log(Amazon.filter((element)=>{
//     return element.poductPrice > 30000
// })
// );

// console.log(Amazon.reduce((obj_ref, element)=>{
//     // let count = 0;
//     if (element.poductPrice > 30000) { 
//          obj_ref[element.productName]  = element.poductPrice                     //{productCount : 2}
//     }
//     return obj_ref
// }, {}));