// create a own method inside a class
class model{
    constructor(name){
        this.brand=name
    }
getbrandname(){// create a function 
    return " i have a "+this.brand;
}
}
let modelname=new model("ford")
console.log(modelname.getbrandname())