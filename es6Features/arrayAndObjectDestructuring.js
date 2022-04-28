

let arr = [10, 20, 30, 40, 50]
// let x = arr[0]
// let y = arr[1]

// let [x, y, z] = arr
// console.log(x, y, z);

//skipping values in between
// let [x, , ,y ] = arr
// console.log(x, y);
 

// let [x, y,...z] = arr
// console.log(x, y, z);


//object destructuring

let car = {
    make : "Honda",
    model: "City",
    color : "Black",
    topSpeed: "220 km/h"
}

// let brand = car.make
// let speed = car.topSpeed
// console.log(brand, speed);

// let {make, model} = car
// console.log(make, model);


let {make : brand, model : type} = car
console.log(brand, type);

// console.log(...car);