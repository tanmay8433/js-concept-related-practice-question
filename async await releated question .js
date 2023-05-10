// find the uniquearray and  unique array value
// are set the value in map and get the value from a
// map and calculate the sum of uniquearray and calculate 
//the mean with used a async await function given array is
// here(in this array value are repeated )
let data=[1,2,3,65,49,8,7,12,3,1,2,9];
let demo=async (data)=>{
    let mapData=new Map();
    let sum=0,mean=0;
    let uniqueElement =data.filter((value,index,array)=>{
        if(array.indexOf(value)==index)
        return value
    })
    uniqueElement.forEach((value,index)=>
    {
        mapData.set(index,value)
    })
    mapData.forEach((value,index)=>
    {
        sum=sum+mapData.get(index)
    })
    mean=sum/mapData.size;
    console.log(uniqueElement)
    console.log(mapData)
    console.log(sum)
    console.log(mean)
    let meanNew=await mean;
    return meanNew;
    }
demo(data).then (res=>{
    console.log(res)
})
