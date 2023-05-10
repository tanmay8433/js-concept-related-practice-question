let obj={
    name:"tamay",
    email:"tanmay@",
    mob:"768453",
    dob:"64/53/0008",
    city:"kotdwar",
    add:"umesh nager kotdewar",
    schoolinfo:{
        schoolName:"svmic ",
        city:"noida",
        dist:"gautam budh nager"
    }
}
function getfulladd({name,city,schoolinfo:{schoolName}}){
    console.log(name+" "+city+" "+schoolName)
}
getfulladd(obj)