const image=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const music =document.querySelector('audio');
const progressContainer=document.getElementById('progress-container');
const progress=document.getElementById('progress');
const currentTimeEl=document.getElementById('current-time');
const durationEl=document.getElementById('duration');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');

//Music

const songs =[
    {
        name:'LNS1',
        displayName:'Service Attitude',
        artist:'HH LNSM', 
    },
    {
        name:'LNS2',
        displayName:'Krishna Prem',
        artist:'HH LNSM', 
    },
    {
        name:'LNS3',
        displayName:'Radha Krishna',
        artist:'HH LNSM', 
    },
    {
        name:'LNS4',
        displayName:'Compassion & Love',
        artist:'HH LNSM', 
    }
]



//Check if playing
let isPlaying = false;
//Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}
//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

//Play or Pause eventlistner
playBtn.addEventListener('click', ()=>(isPlaying?pauseSong():playSong()));

//Update DOM
function loadSong(song){
    title.textContent=song.displayName;
    artist.textContent=song.artist;
    music.src=`Musics/${song.name}.mp3`;
    image.src=`Photos/${song.name}.jpg`
}

//Current Song
let songIndex=0;

//Prevsong
function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Nextsong
function nextSong(){
    songIndex++;
    if(songIndex>songs.length-1){
        songIndex=0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Onload- Select First Song
loadSong(songs[songIndex]);


//update Progress Bar & Time
function updateProgressbar(e){
    if(isPlaying){
        const{duration, currentTime}=e.srcElement;
        //update progress bar width with bg-color
        const progressPercent=(currentTime/duration)* 100;
        progress.style.width=`${progressPercent}%`;

        //Calculate display for duration
        const durationMinutes=Math.floor(duration/60);
        let durationSeconds=Math.floor(duration%60); 
        if(durationSeconds<10){
            durationSeconds=`0${durationSeconds}`;
        }

        //Delay Switching duration element to avoid NaN
        if(durationSeconds){
        durationEl.textContent=`${durationMinutes}:${durationSeconds}`;
        }
        
        //Calculate display for Current time
        const currentMinutes=Math.floor(currentTime/60);
        let currentSeconds=Math.floor(currentTime%60); 
        if(currentSeconds<10){
            currentSeconds=`0${currentSeconds}`;
        }
        currentTimeEl.textContent=`${currentMinutes}:${currentSeconds}`;
    }
}

//Set progress Bar
function setProgressBar(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const {duration}=music;
    music.currentTime=(clickX/width)*duration;

 }


//Even Listener for prev and next
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressbar);
progressContainer.addEventListener('click', setProgressBar);