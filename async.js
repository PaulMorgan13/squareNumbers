let pizza 

async function getPizza(){
  console.log("order pizza")
  setTimeout( () =>{
      pizza = "pizza" 
  },2000
  )

  console.log("pizza was ordered")
}

getPizza()
console.log(`${pizza} was eaten` )
