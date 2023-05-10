//deep copy
var obj={
    name:"tanmay",
    email:"tanmayagarwal8433@gmail.com",
    mob:"7/857896",
    dob:"28/8/2002",
    city:"kotdwar",
}
var obj2=JSON.parse(JSON.stringify(obj));
console.log("obj is",obj);
console.log("obj is",obj2);
console.log("after modifying obj2 data");
obj2.name="mohan";
obj2.email="mohan@gmail.com";
obj2.mob="6533338";
obj2.city="gazibabad";
console.log("obj is",obj);
console.log("obj is",obj2);