// Calculate the sum of numbers within an array
let arr=[1,2,3,56,8];
let n=arr.reduce((total ,value,index,arr)=>{
    return total+value
})
console.log(n)