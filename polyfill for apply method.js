//polyfill  for apply  method
let obj={
    name:"tanmay",
    price:"5356",
    year:"7548",
}
function getfullobj(mr,al){
    console.log(this.name+" "+this.price)
}
Function.prototype.myapply=function(context={},[]){
    if(typeof this!=="function")
    {
        throw new errer (this+"not callable")
    }
    context.fn=this;
    context.fn([])
}
getfullobj.myapply(obj,["mr","werty"])