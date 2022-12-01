//simple hashmap 


let newMap = new Map()

console.log(newMap);

newMap.set("apple","green");  
newMap.set("orange", "orange");
newMap.set("grape", "purple");
newMap.set("peach","pink")
console.log(newMap);
 
  
newMap.delete("apple")   



// constructor
class Contact{
  constructor(name, age , number){
    this.name = name,
    this.age =age,
    this.number = number;
  }

}  



//instances 
const contacts = new Map();   

contacts.set("paul",new Contact("paul",29,"777888"));
contacts.set("tim",new Contact("tim",49,"777888"));
contacts.set("juntao",new Contact("juntao",78,"777888"));     
console.log(contacts)
 

// looping though contact instances 
contacts.forEach((x) => {
  console.log("hi " + x.name)
})

