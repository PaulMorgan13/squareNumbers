

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