// give two string return true if they are //anagrams of one another 
var firstWord="many";
var secondWord="army"
var l=firstWord.split("")
var g=secondWord.split("")
console.log(l)
console.log(g)
var q=l.sort()
var q1=g.sort();
console.log(q);
console.log(q1);
if(q.length==q1.length){
    console.log(true)
}
else{
    console.log(false)
}
for(let i=0;i<l.length;i++)
if(l[i]===g[i]){
    console.log("true")
  }
else{
    console.log("false=","that means not anagram string here");
}