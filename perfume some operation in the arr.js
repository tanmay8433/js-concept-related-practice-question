// perfume the some operation like remove dupllicate element the set the arr elemt in th map and sum the map all value
// and also find the mean in the map and create diff dif function in the all task 

let data=[1,2,34,5,6,7,8,9,1,0,9,8,5,15,18];
//remove the duplicates elements in the array
var  mapdata=new Map;
var sum = 0;

function removeduplicates(data){
    return [...new Set(data)];
}
let fix=removeduplicates(data);
console.log(fix)
//set  the map value with key 
function mmap(fix){
    
    for(let i=0;i<fix.length;i++){
        mapdata.set(i,fix[i])
      }
     console.log(mapdata);
   return mapdata
    }
 var fix2=mmap(fix);
 //find the sum and mean 
function mmamp(fix2){
 mapdata.forEach((ele,ind) => {
    sum += mapdata.get(ind);
  return mapdata.get(ind);
    
 })
 console.log("sum = " + sum);
 console.log("min = " + sum/fix.length);
    }
 var fix3=mmamp(fix2);
//  [
//     1, 2, 34, 5,  6,
//     7, 8,  9, 0, 15,
//    18
//  ]
//  Map {
//    0 => 1,
//    1 => 2,
//    2 => 34,
//    3 => 5,
//    4 => 6,
//    5 => 7,
//    6 => 8,
//    7 => 9,
//    8 => 0,
//    9 => 15,
//    10 => 18
//  }
//  sum = 105
//  min = 9.545454545454545