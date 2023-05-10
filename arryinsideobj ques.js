let demoArray=[{
    id:1,name:"rohan",city:"noida",add:"sec 66 noida up"},
    {id:2,name:"mala",city:"gaziabad",add:"block a up"},
    {id:3,name:"sohan",city:"gaziabad",add:"block b up"},
    {id:4,name:"mohan",city:"gaziabad",add:"block c up"}]
// collect all the data in which city is start with gaziabad
const t= demoArray.filter(s => s.city.startsWith("gaziabad"));
console.log(t);
// print all id in which city is start with gaziabad
const g = demoArray.filter(s => s.city.startsWith("gaziabad")).map(s => s.id);
console.log(g);
