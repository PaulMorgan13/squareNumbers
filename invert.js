function invert(array) { 

    //create a new array
    let newArray = []; 
  
    //loop through each element
    for(i =0; i < array.length; i++){ 

     // push every elements one by one
      newArray.push(-array[i])
    }
  
   return newArray;
}