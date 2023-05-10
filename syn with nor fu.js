// example synchronious function with normal function 
function key(){
    console.log("key calling")
}
function key1(){
    console.log("key1 calling")
    key()
}
function key2(){
    console.log("key2 calling")
    key1()
}
key2()