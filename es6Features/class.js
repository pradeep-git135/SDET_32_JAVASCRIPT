class A {

    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z
    }
    // var let  const
    a = 10;
    static b = 20;

    // function deisplay(params) {
    //     console.log(a);
    // }

    display() {
            console.log(this.a);
            console.log(A.b);
    }

    static display2(obj_ref){
        console.log(obj_ref.a);
        // console.log(this.a);  
        console.log(this.b);
        // console.log(b);  //ReferenceError: b is not defined
    }
    
}

// module.exports = A

// let obj_a = new A("India", "USA", "Uk")
// console.log(obj_a.a);
// console.log(obj_a.x);
// obj_a.display()
// obj_a.display2()  //typeError : display2 is not a function

// A.display2(obj_a)   

class B extends A{
    constructor(x,y,z,q){
        super(x,y,z)
        this.q = q
    }

    displayParentMethod(){
        super.display()
    }
}
let obj_b = new B("India", "US", "UK", "UAE")
module.exports = obj_b

// let obj_b = new B()
// obj_b.displayParentMethod()
// obj_b.display()

// console.log(obj_b.a);

// console.log(B.b);

// B.display2(obj_a)




