// example asynchronious function 

const data=async()=>{
    return "hello this is a asynchronious function "
}
data().then(res=>
{
    console.log(res)
})
const data1=async()=>{
    return "hello "
}
data1().then(res=>
{
    console.log(res)
})