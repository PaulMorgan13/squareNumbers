//solved 

function squareDigits(num){
      let newNum = num.toString().split("");

      let convertInt = newNum.map(Number);  


      let sqr = convertInt.map(i => i * i).join('') 


      let final = parseInt(sqr);

      return final;
  }