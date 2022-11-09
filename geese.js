function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  
    
    let newArray = birds.filter(x => !geese.includes(x)) 
    
    return newArray
    
    // return an array containing all of the strings in the input array except those that match strings in geese
  };