// setter
const student={
    firstname:"tanmay",
    set changename(name){
         this.firstname=name;
    }
}
//console.log(student.firstname)
student.changename="agarwal";
console.log(student.firstname)