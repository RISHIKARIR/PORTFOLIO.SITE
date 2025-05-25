let body = document.querySelector("body");




    window.addEventListener("load",function(){
        setTimeout(() => {    
        document.body.classList.remove("loading");       

    }, 3000);
    });




    let none = document.querySelector(".loading");

    setTimeout(() => {
        none.style.display = "none";
    
    }, 3000);


let loader = document.querySelector(".loading");
let display = document.querySelector(".visible");

setTimeout(() => {
    loader.style.display = "none";
    display.classList.remove("visible");

}, 3000);


    



