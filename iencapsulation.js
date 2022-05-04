class encapsule {
    a = 10;
    #data = "confidential data"

    displayData(){
        console.log(this.#data);
    }

    get data(){
        return this.#data
    }
    set newData(value){
        this.#data = value
    }
}
let inst_encapsule = new encapsule()
// inst_encapsule.displayData()
console.log(inst_encapsule.data);
inst_encapsule.newData = "info"
console.log(inst_encapsule.data);

