class polymorphism{
    sample(a){
        console.log(a);
    }
    sample(a, b){
        console.log(a, b);
    }
    sample(a, b, c){
        console.log(a, b, c);
    }
}
let obj = new polymorphism();
obj.sample(1, 2, 3)

obj.sample(1, 2)