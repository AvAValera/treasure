"use strict";
const mapZone = document.querySelector('.map__zone');
const btnStart = document.querySelector('.btn_start')
const countMove = document.querySelector('.move__num')
const zoneMarker = document.querySelector('.zone_marker')
const gameZone = document.querySelector('.map__zone')
const target ={
    x : 0,
    y : 0,
};
let count;
let winner = false;

mapZone.addEventListener('click',(e) =>{
    if(count >= 1 && !winner){
        const marker = document.createElement('img');
        const distanceToTarget = (e.offsetX - target.x) - (e.offsetY - target.y)
        console.log(distanceToTarget);
        marker.className = 'marker';
        zoneMarker.appendChild(marker);
        marker.src = 'style/../img/shovel.png';
        marker.style.left = (e.offsetX - 30)+ 'px' ;
        marker.style.top = (e.offsetY - 50)+ 'px';
        // console.log(`X ${e.offsetX} Y ${e.offsetY}`);
        count -= 1;
        buttonRestart();
        countMove.textContent = count;
        if(distanceToTarget <= 15 && distanceToTarget >= -15){
            marker.src = 'style/../img/treasure.png';
            console.log('WIN');
            count = 0;
            winner = true;
        }
    }
});
gameZone.onmouseover = () => gameZone.style.opacity = 0.6;
gameZone.onmouseout = () => gameZone.style.opacity = 0;

btnStart.addEventListener('click',() =>{
    const marker = document.querySelectorAll('.marker');
    for(let el of marker){
        el.remove();
    }
    startGame();
});




function startGame() {
    count = 10;
    buttonRestart();
    countMove.textContent = count;
    target.x = Math.floor(Math.random() * 590);
    target.y = Math.floor(Math.random() * 520);
    
};

function buttonRestart(){
    const btnText = btnStart.querySelector('p')
    if(count <= 9){
        btnText.textContent = 'Restart';

    }
    if (count === 10) btnText.textContent = 'Start';
};




