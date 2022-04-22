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

// delete person.skillset

console.log(person.skillset);

//accessing properties 
//dot_notation(.) 
console.log(person.adress);
console.log(person.skillset);
person.introduction()

//bracketNotation ([])
console.log(person["fname"]);
console.log(person["lname"]);
