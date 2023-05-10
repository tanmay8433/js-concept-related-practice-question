// promise.all

let demo=async ()=>{
    let i=10;
    let g=14;
    let demo1=new Promise((resolve,reject)=>
    {
        if(i==10)
        {
            resolve("resolve method1 call")
        }
        else{
            reject("reject method1 call")
        }
    })
    let demo2=new Promise((resolve,reject)=>{
        if(g==14)
        {
            resolve("resolve method 2call")
        }
        else{
            reject ("reject method 2call ")
        }
    })
    let demo3=new Promise((resolve,reject)=>{
        let temp=[];
        for(let i=0;i<10;i++){
            temp.push(i)
        }
        if(temp[4]==4){
            resolve("resolve method 3 call")
        }
        else{
            reject("reject method 3 call")
        }
    })
    let demo4=Promise.all([demo1,demo2,demo3])
    return demo4;
}

demo().then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})