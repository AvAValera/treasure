"use strict";
const mapZone = document.querySelector('.map__zone');
const btnStart = document.querySelector('.btn_start')
const countMove = document.querySelector('.move__num')
const zoneMarker = document.querySelector('.zone_marker')
const target ={
    x : 0,
    y : 0,
};
mapZone.addEventListener('click',(e) =>{
    const marker = document.createElement('div');
    marker.style.zIndex = 0;
    const distance = (e.offsetX - target.x) - (e.offsetY - target.y)
    
    if(distance <= 15 && distance >= -15){
        console.log('WIN');
    }
    marker.className = 'marker';
    zoneMarker.appendChild(marker);
    marker.style.left = (e.offsetX - 10)+ 'px' ;
    marker.style.top = (e.offsetY - 10)+ 'px';
    console.log(`X ${e.offsetX} Y ${e.offsetY}`);
    
    countMove.textContent -= 1;
})

btnStart.addEventListener('click',() =>{
    const marker = document.querySelectorAll('.marker');
    for(let el of marker){
        el.remove();
    }
    startGame();
});




function startGame() {
    countMove.textContent = 10;
    target.x = Math.floor(Math.random() * 590);
    target.y = Math.floor(Math.random() * 520);
    
};







console.log(target.x + ' ' + target.y);