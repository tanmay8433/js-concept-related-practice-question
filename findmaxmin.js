// find the max and min value in array
let arr=[1,2,3,6];
function getmaxmin(arr){
    let max=arr[0];
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i])
        max=arr[i];
        if(min>arr[i])
        max=arr[i]
    }
    console.log("max value=",max)
    console.log("min value=",min)
    
    }
getmaxmin(arr)