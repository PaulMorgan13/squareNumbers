

let back = document.querySelector(".box1");


function changeColor() {     

    //grabs window width
    window_width = window.innerWidth;


    if(window_width > 800){
        back.style.background = "red"
    } 
    else{ 
        //changes the color to plum if width is above 800
        back.style.background = "plum"

    }
 
} 


window.onresize = changeColor;

