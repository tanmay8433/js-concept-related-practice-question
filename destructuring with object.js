// destructuring with object
let obj={
    name:"tamay",
    email:"tanmay@",
    mob:"768453",
    dob:"64/53/0008",
    city:"kotdwar",
    add:"umesh nager kotdewar",
}
function getfulladd({name,email}){
    console.log(name+" "+email)
}
getfulladd(obj);
//2 method
let{name,email}=obj;
console.log(email);