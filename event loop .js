
// example event loop 
let demo=()=>
{
   setTimeout(()=>
    {
        console.log("demo calling")},1000)
}
let demo2=()=>{
    console.log("demo 2 calling")
    demo()
}
demo2();