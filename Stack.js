class Stack{

    constructor(){
      this.items = [];
    }  
  
    push(item){
          this.items.push(item);
    }
  
  
    pop(){
      return  this.items.pop();
  
    }  
  
    peek(){
      if( this.items.length == 0 ){
        console.log("the stack is empty at the moment")
      } 
      else {
        return this.items.length-1
      } 
    } 
  
  
    size(){
        return this.items.length
    }   
  
    isEmpty(){
      if (this.items.length < 0){
        return true
      } 
      else {
        return false
      }
    }
  
  
    
  }   
  
  
  let games = new Stack(); 
  
  
  
  
  console.log(games.size())  
  games.peek()
  