//polyfill  for call method
let obj={
    name:"tanmay",
    price:"5356",
    year:"7548",
}
function getfullobj(mr,al){
    console.log(this.name+" "+this.price)
}
Function.prototype.mycall=function(context={},...args){
    if(typeof this!=="function")
    {
        throw new errer (this+"not callable")
    }
    context.fn=this;
    context.fn(...args)
}
getfullobj.mycall(obj,"mr","werty") //op-tanmay 5356