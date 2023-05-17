const startingminutes=10;
let time=startingminutes*60;

const countdown=document.getElementById('countdown');

setInterval(updatecountdown,1000)
function updatecountdown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10?'0'+seconds:seconds;

    countdown.innerHTML=`${minutes}:${seconds}`;
    time--;
}