// console.log("start");
// console.log("inProgress");
// console.log("completed");

//node api commands

// setTimeout(() => {
//     console.log("this msg is printed after 3000ms");
// }, 3000);

// setInterval(() => {
//     console.log("msg from set interval");
// }, 1000);

// console.log("start");
// setTimeout(() => {
//     console.log("in progress");
// }, 2000);
// console.log("completed");

//promises

// let p = new Promise((resolve, reject)=>{
//     let x = 100
//     let y = 200;
//     if (x == y) {
//         resolve("x and y are equal");
//     }
//     else{
//         reject("x and y are not equal")
//     }
// })

// p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// async function sync() {
//     console.log("start");
//     await new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve("in progerss")
//             }, 3000);
//     }).then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
//     console.log("finished");
// }
// sync()

//promise chaining

function promise1() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("this msg is from promise 1")
        }, 3000);
    })
}

function promise2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("this msg is from promise 2")
        }, 4000);
    })
}

function promise3(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("this mdg id from promise 3")
        }, 2000);
    })
}

//call back hell
// promise1().then((msg)=>{
//     console.log(msg);return promise2()}).then((msg)=>{
//         console.log(msg);return promise3()}).then((msg)=>{
//             console.log(msg);console.log("all the promises got resolved");})

// Promise.all([promise1(), promise2(), promise3()]).then((msg)=>{console.log(msg);console.log("all promise got resolved");})


//racing
// Promise.race([promise1(), promise2(), promise3()]).then((msg)=>{console.log(msg);})