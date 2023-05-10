//polyfill  for bind method
let obj={
    name:"tanmay",
    price:"5356",
    year:"7548",
}
function getfullobj(mr,al){
    console.log(this.name+" "+this.price)
}
Function.prototype.mybind=function(context={},[]){
    if(typeof this!=="function")
    {
        throw new errer (this+"not callable")
    }
    context.fn=this;
    return function(){
    context.fn([])
    }
}
let data=getfullobj.mybind(obj,["mr","werty"]);
data();