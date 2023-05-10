// custom exception handling(also know as men made error)
let demo=()=>{
     
    try{
        let aaa =10;
       
        if(aaa===10){
        throw new Error("this is a custom err")
    }
}
catch(err){
    console.log(err.message)
}
}
demo()