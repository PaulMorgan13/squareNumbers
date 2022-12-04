function fib(n, prev = []){  

  // check if number si in array
    if(prev[n] != null){
      return prev[n]
    }
    

    // hoist a result 
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