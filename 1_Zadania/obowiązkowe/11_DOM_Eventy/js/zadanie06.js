document.addEventListener("DOMContentLoaded", function(){
    const box = document.getElementById('box');

    let globalX = document.getElementById('globalX');
    let globalY = document.getElementById('globalY');
    let localX = document.getElementById('localX');
    let localY = document.getElementById('localY');
    box.addEventListener("mousemove", function(){
        let boxRect = box.getBoundingClientRect()
        
        globalX.innerText = event.clientX;
        globalY.innerText = event.clientY;
        localX.innerText = event.clientX - boxRect.left;
        localY.innerText = event.clientY - boxRect.top;
    })
})