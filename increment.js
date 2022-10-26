function incrementer(nums) { 

    let  newArray = nums.map((num,i)=> {
      return (num +i+1)%10; 
    }) 
    
    return newArray
    
  }