const nums= [1,2,4,5,6]  

//call back function
let red = function (c,y){
  return c + y 
}


//call back is now input
let sum = nums.reduce(red, 0)  

console.log(sum);  

