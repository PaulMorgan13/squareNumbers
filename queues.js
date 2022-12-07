const n = 5

let array = new Array(n);

let front, rear = -1;   

function enQueue(x){
  if(rear == n-1){
    console.log("overflow")
  } 
  if(front == -1 && rear == -1) {
      front , rear = 0; 
      array[rear] = x
  }   
else {
    rear = rear + 1 
      array[rear] = x; 
  
}


}  

array.push(5)  