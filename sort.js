const numbers = [3,8,1,5,4,7,2,6]   

console.log(numbers)  

const obj = {
    "hassan":5,
    "brandon":3, 
    "grey":2,  
    "will":42,
    
  }        



console.log(Object.values(obj).sort((a,b)=>{
  return  a - b
  
}))   



const books = [
{
  name: "ready player one",
  price: 11
},    
{
  name: "eat pray love",
  price: 15 
} , 
{
  name: "holes",
  price:8
}


]




console.log(books.sort(
    (a,b) => {
        return  b.price - a.price
      
    }

  
))       


//call back  below

function compare(a,b){

  a-b 
}