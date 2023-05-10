//ansynchrous function with normal function 
async function data(){
    return "hello this is a asynchronious function "
}

async function data1(){
    return "hello "
}
data().then(res=>
{
    console.log(res)
})
data1().then(res=>
{
    console.log(res)
})