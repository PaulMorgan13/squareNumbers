class Stack{

    constructor(){
      this.items = [];
    }  
  


    push(item){
        this.items[this.count] = item
        
        console.log(item + " added to  " +this.count
      )
      this.count+= 1
      return this.count-1
      
      }
    
    
      pop(){
        if(this.count == 0)
          return undefined  
          let deleteItem = this.items[this.count-1]
          this.count= this.count -1  
    
          console.log("we have deleted " + deleteItem)
          return deleteItem    
    
      }  

  
    peek(){
      if( this.items.length == 0 ){
        console.log("the stack is empty at the moment")
      } 
      else {
        return this.items[this.count-1]
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
  
  
  let games = new Stack(); gt
  
  
  
  
  console.log(games.size())  
  games.peek()
  