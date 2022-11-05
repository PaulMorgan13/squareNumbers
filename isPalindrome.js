function isPalindrome(x) {  
  
    let str = x.toLowerCase();
      
    let newString = ""; 
    
    for (let i = str.length-1; i >= 0 ; i--){
      newString = newString + str[i];
    }  
    
    if(str == newString){
      return true
    }
    else {
      return false
    }
  
  
  }