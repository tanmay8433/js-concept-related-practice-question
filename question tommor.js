let obj={
    id:" ",
    name:" ",
    prize:"1000",
    boardingtime:"2 : 00 hrs",
    departtime:"1 : 00 hr ",
    arriavatime:"2 : 00 hrs  ",
    
}

let objData=[
    {
        id:1,
        name:"manish",
        usertype:1
    },
    {
        id:2,
        name:"rohan",
        usertype:2
    },
      {
        id:3,
        name:"jagat",
        usertype:3
    },
    {
        id:4,
        name:"ramesh",
        usertype:1
   }
     ]
 let demo=()=>{
     try{
const g=objData.filter(s=>s.usertype!=3)
console.log(g)
 let getfullad=()=>{
    (obj.id=g[0].id,obj.name=g[0].name);
  console.log(obj);
  (obj.id=g[1].id,obj.name=g[1].name);
  console.log(obj);
  (obj.id=g[2].id,obj.name=g[2].name);
  console.log(obj);
 }
 getfullad()

}
catch(err){
    console.log(err.message)
}
 }
 demo()
//  o/p
//  [
//     { id: 1, name: 'manish', usertype: 1 },
//     { id: 2, name: 'rohan', usertype: 2 },
//     { id: 4, name: 'ramesh', usertype: 1 }
//   ]
//   {
//     id: 1,
//     name: 'manish',
//     prize: '1000',
//     boardingtime: '2 : 00 hrs',
//     departtime: '1 : 00 hr ',
//     arriavatime: '2 : 00 hrs  '
//   }
//   {
//     id: 2,
//     name: 'rohan',
//     prize: '1000',
//     boardingtime: '2 : 00 hrs',
//     departtime: '1 : 00 hr ',
//     arriavatime: '2 : 00 hrs  '
//   }
//   {
//     id: 4,
//     name: 'ramesh',
//     prize: '1000',
//     boardingtime: '2 : 00 hrs',
//     departtime: '1 : 00 hr ',
//     arriavatime: '2 : 00 hrs  '