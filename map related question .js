// map related question 1
let arr=["tanmay","agarwal","umeshnager"];
let data=new Map();
// store the data in unique keys using for loop
for(var i=0;i<arr.length;i++){
   data.set(i,arr[i]);
}
console.log(data)
// get the data in all unique key using for loop 
for(var i=0;i<data.size;i++){
 console.log(data.get(i));
}
// check the data in map using has 
for(var i=0;i<data.size;i++){
console.log(data.has(i));
}
//delete the value in map using delete

for(var i=0;i<data.size;i++){
console.log(data.delete(i))
}
console.log(data)