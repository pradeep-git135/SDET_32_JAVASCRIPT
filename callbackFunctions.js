// function fun1(external) {
//     external()
//     console.log("i am from fun1 function");
// }



// callback()

// fun1(fun2)

// fun1(function fun2() {
//     console.log("i am from fun2 function");
// })


function Ecommerce(status) {
    if (status() == "payment Success") {
        console.log("product booked successfuly");
    } else {
        console.log("payment failed");
    }
}

function payement() {
    return "payment failed"
}
Ecommerce(payement)