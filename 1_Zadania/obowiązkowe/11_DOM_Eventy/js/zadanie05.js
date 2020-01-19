  document.addEventListener('DOMContentLoaded', (event) => {
    
    var array = document.querySelectorAll("div");
    array.forEach(element => {
        element.addEventListener("click",() => {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            element.style.background = randomColor; 
        })
       });

    });