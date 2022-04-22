let person = {
    fname : "C R",
    lname : "Pradeep",
    adress : "India",
    yoe : 3,
    skillset : ["java", "selenium", "javascript", "api"],
    biodata : {
        fname : "C R",
        lname : "Pradeep",
        adress : "India",
        skillset : ["java", "selenium", "javascript", "api"]
    },
    introduction : function () {
        console.log("hello all myself"+ this.fname+" "+this.lname);
    }
}
// console.log(person);

let person2 = Object.create(person)

person2.empid = "TYCO32013"
person2.salary = "10lpa"
person2.email = "person1.testyantra.com"

// console.log(person2);

for (let key in person2) {

    console.log(person2[key]);
    // if (person2.hasOwnProperty.call(person2, key)) {
    //     console.log(person2[key]);
    // }
}