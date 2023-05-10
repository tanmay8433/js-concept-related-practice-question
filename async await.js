//async await 
let demo=async()=>{
    console.log("demo calling")
   let demo2=await "hello demo2"
  console.log("hello tanmay")
    return demo2
}
demo().then(res=>{
console.log(res)
})
console.log("welcome to programming")
//output demo calling ,welcome to programming ,hello tanmay, hello demo2