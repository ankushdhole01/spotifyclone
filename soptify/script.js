console.log("welcome to Spotify");
//initialize the variavble
let songIndex = 0;
let audioElement =new Audio('asset/Maan Meri Jaan_320(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let mastersongName =document.getElementById('mastersongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let  songs = [
    {songName: "Maan Meri Jaan", filePath: "asset/Maan Meri Jaan_320(PagalWorld.com.se).mp3", coverPath: "images/maxresdefault.jpg" },
    {songName: "Jaadugar", filePath: "asset/Jaadugar_192(PagalWorld.com.se).mp3", coverPath: "images/maxresdefault (2).jpg" },
    {songName: " Rang Lageya", filePath: "asset/Rang Lageya - Mohit Chauhan.mp3", coverPath: "images/maxresdefault (1).jpg" },
    {songName: "Woh - Dino James", filePath: "asset/Aankhon Se Batana(PagalWorld.com.se).mp3", coverPath: "images/maxresdefault (6).jpg" },
    {songName: " Mera Safar", filePath: "asset/Mera-Safar(PagalWorldl) (1).mp3", coverPath: "images/maxresdefault (4).jpg" },
    {songName: "Kesariya", filePath: "asset/Kesariya(PagalWorld.com.se).mp3", coverPath: "images/kesariya-brahmastra.jpg" },
    {songName: "Tum Jo Milo", filePath: "asset/Unstoppable(PagalWorld).mp3", coverPath: "images/maxresdefault (3).jpg" },
    {songName: "Jane Na Dunga Kahin", filePath: "asset/new_192_Jaane Na Dunga Kahin - Armaan Malik.mp3", coverPath: "images/1170x658withlogo155a32e43edf43fd90d164eae636e159.webp" },
    {songName: "Steal my Girl", filePath: "asset/Steal-My-Girl---One-Direction(PagalWorld).mp3", coverPath: "images/One-Direction-Steal-My-Girl-Mp3-Download-Lyrics.jpg" },
]

 
songItems.forEach((element , i)=>{
// console.log(element , i);
element.getElementsBytagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 

})

//audioElement.play()


//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen to event 

audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
  
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

  Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllplays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`asset/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`asset/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`asset/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})