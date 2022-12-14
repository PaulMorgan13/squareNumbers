function fib(n, prev = []){  



// checks if the item is in the prev array
  if(prev[n] != null){
      return prev[n]
    }
    
    let result 
    if (n < 2){
      result = 1
    }
    else {
      result = fib(n-1, prev = [])+ fib(n-2, prev = []);
    }
  
    prev[n] = result
    return result
  
    
  }   
  
  
  
  console.log(fib(40))   