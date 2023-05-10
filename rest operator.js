
// rest operator
let demo=(...args)=>{
    let sum=0;
    for(let x of args){
        sum=sum+x;
    }
    console.log(sum)
    }
    demo(1,2,3,6,5,4)