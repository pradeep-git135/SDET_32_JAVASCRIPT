
//standard function
// function ty (emp1, emp2, emp3, emp4, emp5) {
//     console.log("welcome to ty "+emp1, emp2, emp3, emp4, emp5);
// }
// ty("Rajesh", "Pankaj", "Nikki", "Rishi", "Anil")


let ty = function  (emp1, emp2, emp3, emp4, emp5) {
        console.log("welcome to ty "+emp1, emp2, emp3, emp4, emp5);
        console.log(arguments[5]);
        console.log(arguments);
    }
ty("Nikki","Rajesh","Rishi", "Pankaj",  "Anil", "Pradeep")