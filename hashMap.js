//simple hashmap 


let newMap = new Map()

console.log(newMap);

newMap.set("apple","green");  
newMap.set("orange", "orange");
newMap.set("grape", "purple");
newMap.set("peach","pink")
console.log(newMap);
 
  
newMap.delete("apple")   


for (x of newMap){
  console.log("this object  " + x[1])
}

