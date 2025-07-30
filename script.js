console.log('Welcome to spotify ')
let songindex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterplay =document.getElementById('masterplay'); 
let  myprogressBar = document.getElementById('myprogressBar');
let  gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname')

let songs = [ 
{songname: 'Let-me-love-you ' , filePath:" songs/1.mp3" , Coverpath : "covers/1.jpg" },
{songname: 'never-love ' , filePath:" songs/2.mp3" , Coverpath : "covers/2.jpg" },
{songname: 'hate-what ' , filePath:" songs/3.mp3" , Coverpath : "covers/3.jpg" },
{songname: 'need-more ' , filePath:" songs/4.mp3" , Coverpath : "covers/4.jpg" },
{songname: 'on-bed ' , filePath:" songs/5.mp3" , Coverpath : "covers/5.jpg" },
{songname: 'change-no ' , filePath:" songs/6.mp3" , Coverpath : "covers/6.jpg" },
{songname: 'data-ipl ' , filePath:" songs/7.mp3" , Coverpath : "covers/7.jpg" },
{songname: 'hd-film ' , filePath:" songs/8.mp3" , Coverpath : "covers/8.jpg" },
{songname: 'npl-dark ' , filePath:" songs/9.mp3" , Coverpath : "covers/9.jpg" },
{songname: 'go-back ' , filePath:" songs/10.mp3" , Coverpath : "covers/10.jpg" },

]
//audioElement.play();

// Handle play / pause click 
masterplay.addEventListener('click',()=>{
if (audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity =1;
}
else{
     audioElement.pause();
    masterplay.classList.remove('fa-circle-pause') ;
    masterplay.classList.add('fa-circle-play'); 
    gif.style.opacity = 0 ;

}

})

// listen  to events 
audioElement.addEventListener('timeupdate', ()=>{
  
    // seek update 
    progress =((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;

})

myprogressBar.addEventListener('change',()=> {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100 ; 
}) 

const makeallplay =()=> {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play')
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
     element.addEventListener('click' , (e) =>{
        makeallplay()
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
         songindex = parseInt(e.target.id);
        audioElement.src = `songs/${songindex+1}.mp3`;
         mastersongname.innerText = songs[songindex].songname;
         audioElement.currentTime = 0;
         audioElement.play();
        gif.style.opacity =1;
        masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
  if (songindex >= 9){
    songindex = 0 ;
  } 
  else{
    songindex += 1 ;
}
 audioElement.src = `songs/${songindex+1}.mp3`; 
  mastersongname.innerText = songs[songindex].songname;  
audioElement.currentTime = 0;
         audioElement.play();
             gif.style.opacity =1;

         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})




document.getElementById('previous').addEventListener('click', ()=>{
  if (songindex <= 0){
    songindex = 0 ;
  }
  else{
    songindex -= 1 ;
}
 audioElement.src = `songs/${songindex+1}.mp3`;
 mastersongname.innerText = songs[songindex].songname;
audioElement.currentTime = 0;
         audioElement.play();
             gif.style.opacity =1;

         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})