const mapZone = document.querySelector('.map__zone');
const target ={
    x : 0,
    y : 0,
};
mapZone.addEventListener('click',(e) =>{
    const marker = document.querySelector('.marker')
    marker.style.display = 'block';
    const distance = (e.offsetX - target.x) - (e.offsetY - target.y)
    console.log(distance);
    if(distance <= 15 && distance >= -15){
        console.log('WIN');
    }

    marker.style.left = (e.offsetX - 10)+ 'px' ;
    marker.style.top = (e.offsetY - 10)+ 'px';

})
function startGame() {
    const countMove = document.querySelector('.move__num')
    countMove.textContent = 0;
    target.x = Math.floor(Math.random() * 590);
    target.y = Math.floor(Math.random() * 520);
}
startGame();
console.log(target.x + ' ' + target.y);