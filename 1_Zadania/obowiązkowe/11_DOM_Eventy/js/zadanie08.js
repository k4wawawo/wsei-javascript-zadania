document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("resize", (event) => {        
    let windowWidth = document.getElementById('windowWidth');
    let windowHeight = document.getElementById('windowHeight');
    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;
    });
})