// example synchronous function with arrow fun
let demo=()=>{
    console.log("demo calling")
}
let demo1=()=>{
    console.log("demo1 calling")
    demo()
}
let demo2=()=>{
    console.log("demo2 calling")
    demo1()
}
demo2()