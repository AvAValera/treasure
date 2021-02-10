"use strict";
const audio = document.querySelector('.audio_play')
const mapZone = document.querySelector('.map__zone')
const btnStart = document.querySelector('.btn_start')
const countMove = document.querySelector('.move__num')
const zoneMarker = document.querySelector('.zone_marker')
const gameZone = document.querySelector('.map__zone')
const message = document.querySelector('.show__message')
const target ={
    x : 0,
    y : 0,
};
let count;
let winner = false;
const soundShovel = ['style/../sound/shovel_s1.wav', 
    'style/../sound/shovel_s2.wav'];
let paramX ;
let paramY ;
mapZone.addEventListener('click',(e) =>{
    if(count >= 1 && !winner){
        const marker = document.createElement('img');
        const distanceToTarget = (e.offsetX - target.x) - (e.offsetY - target.y)
        marker.className = 'marker';
        zoneMarker.appendChild(marker);
        marker.src = 'style/../img/shovel.png';
        actionSound(soundShovel
            [Math.floor(Math.random() * soundShovel.length)]);
        if(mapZone.offsetWidth >= 300){
            paramX = 30;
            paramY = 50;
        }
        else{
            paramX = 10;
            paramY = 10;
        }
        marker.style.left = ((e.offsetX - paramX) * 100 / mapZone.offsetWidth ) + '%';
        marker.style.top = ((e.offsetY - paramY) * 100 / mapZone.offsetHeight ) + '%';
        console.log(`X ${e.offsetX} Y ${e.offsetY}`);
        count -= 1;
        distance(distanceToTarget);
        buttonRestart();
        countMove.textContent = count;
        if(distanceToTarget <= 15 && distanceToTarget >= -15){
            marker.src = 'style/../img/treasure.png';
            actionSound('style/../sound/shovel_rock.wav');
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
    message.textContent = ''
    startGame();
});

function startGame() {
    winner = false;
    count = 10;
    buttonRestart();
    countMove.textContent = count;
    target.x = Math.floor(Math.random() * 630);
    target.y = Math.floor(Math.random() * 490);
    actionSound('style/../sound/click.wav');
}

function buttonRestart(){
    const btnText = btnStart.querySelector('p')
    if(count <= 9){
        btnText.textContent = 'Restart';
    }
    if (count === 10) btnText.textContent = 'Start';
}

function actionSound(sound) {
    audio.src = sound;
}
function distance(dist){
    
    if(count <= 0){
        message.textContent = 'ТЫ ПРОИГРАЛ!'
    }
    else{
        if(dist <= 15 && dist >= -15){
            message.textContent = 'МОЛОДЕЦ!'
        }
        else if(dist < 50 && dist > -50){
            message.textContent = 'ГОРЯЧЁ!'
        }
        else if(dist < 100 && dist > -100){
            message.textContent = 'РЯДОМ!'
        }
        else if(dist < 200 && dist > -200){
            message.textContent = 'ХОЛОДНО!'
        }
        else if(dist < 400 && dist > -400){
            message.textContent = 'ОЧЕНЬ ХОЛОДНО!'
        }
    }
}

function param(){
    
}

