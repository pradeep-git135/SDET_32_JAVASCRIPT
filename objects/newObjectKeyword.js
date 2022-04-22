
let car = new Object();  //let car = {}

car.make = "Toyota"
car.model = "corolla"
car.transmission = "auto"
car.drive = 2
car.topSpeed = 240
car.fuelTankCapasity = 45
car.move = function () {
    console.log("car started moving");
}
car.spec = {
   make : "Toyota",
    model : "corolla",  
    transmission : "auto",
    drive : 2,
    topSpeed : 240,
    fuelTankCapasity : 45,
    move : function () {
    console.log("car started moving");
}
}

console.log(car.spec);
console.log(car.spec.fuelTankCapasity);