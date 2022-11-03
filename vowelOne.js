function vowelOne(s){   
  
    let  array = s.split("")
    
    let binaryString 
      
      array.forEach( i => { return
      if (i == "a" || i == "e" || i == "i" || i == "o"|| i =="u"){  
        console.log("this value is 1")
        
        binaryString =  binaryString + "1";
      }
      else { return 
        console.log("this value is 0")
        binaryString = binaryString + "0";
      
      }
      
    })
    
      return binaryString;
    
  }  



  //better version of the code 
  function vowelOne(s){
    let s1 = s.toLowerCase();
    let res = '';
    for (let i = 0; i < s1.length; i++){ 
      if(s1[i] == 'a' || 
        s1[i] == 'e' || 
        s1[i] == 'u' || 
        s1[i] == 'i' || 
        s1[i] == 'o'){ res += '1';}
      else {res += '0';}
    }
    return res;
  }