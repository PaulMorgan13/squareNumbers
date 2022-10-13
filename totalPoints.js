function points(games) {  
    let score = 0; 
    
    
    games.forEach(game => { 
      const [x,y] = game.split(":").map(Number) 
                  
        if (x>y){
          score = score +3;
        }      
            
        if (x==y){
          score = score+ 1;
        }
                  
                  })
    
    
    
    return score;
    
    
  }  




/* 
const word = "paul";  

let newThing = ""

for(i=word.length-1 ;i >= 0 ; i--){
    newThing = newThing + word[i] 
} 


console.log(newThing) 

*/
