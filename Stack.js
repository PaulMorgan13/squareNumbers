class Stack{

    constructor(){
      this.items = [];
    }  
  

    // this will push the element to the stack 
    push(item){
        this.items[this.count] = item
        
        console.log(item + " added to  " +this.count
      )
      this.count+= 1
      return this.count-1
      
      }
    
      // this will pop the element  ins the stack 
      pop(){
        if(this.count == 0)
          return undefined  
          let deleteItem = this.items[this.count-1]
          this.count= this.count -1  
    
          console.log("we have deleted " + deleteItem)
          return deleteItem    
    
      }  

    // shows the top of the stack
    peek(){
      if( this.items.length == 0 ){
        console.log("the stack is empty at the moment")
      } 
      else {
        return this.items[this.count-1]
      } 
    } 
  
    //show the current size of the  stack
    size(){
        return this.items.length
    }     


    // returns wheather the stack if full or not
  
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
  