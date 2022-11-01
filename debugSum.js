function getSumOfDigits(integer) {
    let sum = 0 ;  // chamged to let insted of var
    let digits =  Math.floor(integer).toString();  //changed to let instead of var
    for(let ix = 0; ix < digits.length; ix++) { // used ++ instead of sum + ix  
    sum = sum + Number(digits[ix]) //cast string to digit 
    }
    return sum;
  }