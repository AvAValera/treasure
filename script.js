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
const soundShovel = ['style/../sound/shovel_s1.wav', 
    'style/../sound/shovel_s2.wav'];

mapZone.addEventListener('click',(e) =>{
    if(count >= 1 && !winner){
        const marker = document.createElement('img');
        const distanceToTarget = (e.offsetX - target.x) - (e.offsetY - target.y)
        console.log(distanceToTarget);
        marker.className = 'marker';
        zoneMarker.appendChild(marker);
        marker.src = 'style/../img/shovel.png';
        actionSound(soundShovel
            [Math.floor(Math.random() * soundShovel.length)], 700);
        
        marker.style.left = (e.offsetX - 30)+ 'px' ;
        marker.style.top = (e.offsetY - 50)+ 'px';
        // console.log(`X ${e.offsetX} Y ${e.offsetY}`);
        count -= 1;
        buttonRestart();
        countMove.textContent = count;
        if(distanceToTarget <= 15 && distanceToTarget >= -15){
            marker.src = 'style/../img/treasure.png';
            actionSound('style/../sound/shovel_rock.wav', 200);
            count = 0;
            winner = true;
        }
    }
});
gameZone.onmouseover = () => gameZone.style.opacity = '0';
gameZone.onmouseout = () => gameZone.style.opacity = '0.6';

btnStart.addEventListener('click',() =>{
    const marker = document.querySelectorAll('.marker');
    for(let el of marker){
        el.remove();
    }
    
    startGame();
});




function startGame() {
    winner = false;
    count = 10;
    buttonRestart();
    countMove.textContent = count;
    target.x = Math.floor(Math.random() * 590);
    target.y = Math.floor(Math.random() * 520);
    actionSound('style/../sound/click.mp3', 200);
}

function buttonRestart(){
    const btnText = btnStart.querySelector('p')
    if(count <= 9){
        btnText.textContent = 'Restart';
    }
    if (count === 10) btnText.textContent = 'Start';
}

function actionSound(sound, time) {
    const audio = document.createElement('audio');
    const body = document.querySelector('body');
    audio.className = 'sound';
    audio.src = sound;
    body.appendChild(audio);
    audio.play();
    setTimeout(() => audio.remove(),time);
}




