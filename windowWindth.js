

let back = document.querySelector(".box1");


function changeColor() {  
    window_width = window.innerWidth;

    if(window_width > 800){
        back.style.background = "red"
    } 
    else{
        back.style.background = "plum"

    }
 
} 


window.onresize = changeColor;

