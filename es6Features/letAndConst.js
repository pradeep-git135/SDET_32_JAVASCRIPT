// console.log(a);  //undefined
// var a = 10;
// console.log(a);    //10

// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// let b;
// console.log(b);  //undefined

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c;       //SyntaxError: Missing initializer in const declaration
// c = 100

// var a = 10;
// var a = 20;
// var a = 100;
// console.log(a);   //100

// let b = 5;
// let b = 15;  //SyntaxError: Identifier 'b' has already been declared

// let c = 22;
// // c = 11;
// console.log(c);

// const d = 2000;

//block scoping

// let x = 2.5;
// const y = 5.5;

// {
//     var a = 20;
//     let b = 30;
//     const d = 40;
// }
// console.log(b);   //ReferenceError: b is not defined

// for (var index = 0; index < 5; index++) {
//     console.log(index);                        //0, 1, 2, 3, 4
// }
// console.log(index);        //5

// for (let index = 0; index < 5; index++) {
//     console.log(index);                        //0, 1, 2, 3, 4
// }
// console.log(index);     //ReferenceError: index is not defined                
