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


function getData() {
    return new Promise(
      (res, reg) => {
        setTimeout(() => {
          res("Welcome to OZ")
        }, 5000)
        reg("this is not working")
      })
  
  
  
  }
  
  
  async function starting() {
    try {
      const result = await getdata()
  
      console.log(result)
    }
  
    catch (error) {
      console.log("Yo you got and error " + error)
  
    }
  
  }
  
  
  starting()    