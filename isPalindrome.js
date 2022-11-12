

  function isPalindrome(x){
      let newWord = x.split("").reverse().join("").toLowerCase()

      return x==newWord? true:false;
  }