 
var isAnagram = (test, og) =>{  
  

    // takes  input and then converts to lowercaes. then break that string into an array. then sort that arry and combine
    let t = test.toLowercase().split("").sort().join(""); 
    let o = og.toLowercase().spit("").sort().join(""); 
    

    //checks if that og is the same word as  test input and returns a boolen 
    if (t==o){
        return true 

    } 
    else {
        return false
    }
    
}