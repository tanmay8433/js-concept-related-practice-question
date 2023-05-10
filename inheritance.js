// inheritance
class model{
    constructor(name){
        this.brand=name
    }
    getbrandname(){
        return "i have a "+this.brand;
    }
}
class base extends model{
    constructor(name,year){
      super(name)
      this.name=name;
      this.year=year;
    }
    getmanufactureyear(){
        return this.getbrandname()+" "+"its manufacturing year"+" "+this.year;
    }
}
let basename=new base("ford",2017);
let menyear=basename.getmanufactureyear()
console.log(menyear)