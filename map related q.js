
// if number in map print sum other wise if string  print string
let arr=["tanmy","agarwal",21,56,"description"];
let  sum=0;
let t=new Map();
for(let i=0;i<arr.length;i++)
{
    t.set(i,arr[i]);
 }
console.log(t);
for(var i=0;i<t.size;i++){
    console.log(typeof t.get(i))
}
for( var i=0;i<t.size;i++)
{
    if(typeof t.get(i)=="string")
    {
        console.log("it string");
    }
    else if(typeof t.get(i)=="number")
    {
        sum+=t.get(i);
 console.log(sum);
   }
   
        
}
