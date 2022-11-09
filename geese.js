function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  
    

    // created a new array and then used the filter method on the input. 
    //Then within the filter params check to see if includes the an element inside fo geese array
    let newArray = birds.filter(x => !geese.includes(x)) 
    
    return newArray
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  };