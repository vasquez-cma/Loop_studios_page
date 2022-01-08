function myFunction(){
    let menu = document.getElementById("navigation-container");
    menu.classList.toggle("show");

}


let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-bars");

btn.onclick = function(){
    
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars","fa-times");
    }else{
        icon.classList.replace("fa-times","fa-bars");
    }

}