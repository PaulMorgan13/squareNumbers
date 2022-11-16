function openOrSenior(data){

    
    return newArray = data.map((x )=> { 

      if (x[0] < 55  &&  x[1] < 7 ){ 
        return  "Open"
      }    
      else 
         return "Senior"
    } )
   
   
   console.log(newArray)
   
   }   


   //the less code solution 

   
   function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
  