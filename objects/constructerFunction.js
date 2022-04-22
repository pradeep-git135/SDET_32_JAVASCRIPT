function Person(fname, lname, skillSet, adress) {
    this.fname =  fname 
    this.lname = lname = "Pradeep"
    this.skillSet = skillSet["java", "selenium", "javascript", "api"]
    this.adress = adress 
}

let p1 = new Person( "C R", "Pradeep", ["java", "selenium", "javascript", "api"], "India");
let p2 = new Person("Pankaj", "Chauhan", ["java", "selenium", "javascript", "api"], "India")

Person.prototype.YOE = 5

console.log(p1.YOE);
console.log(p2.YOE);

// console.log(p1);
// console.log(p2);