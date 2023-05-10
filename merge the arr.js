// merge the two arr all element in another array
let arr=[12,3,6,6,0]
let arr2=[1,23,6,9,8];
//1method using spread opertor
let arr3=[...arr,...arr2]
console.log(arr3);
//2 method using push  opertor
arr.push(...arr2)
console.log(arr)