let audio, playbtn, mutebtn
    let playPromise = document.querySelector('audio').play();
    if (playPromise !== undefined) {
     playPromise.then(_ => {
     // Autoplay started!
 }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}

    function initAudioPlayer(){
      audio = new Audio();
      audio.src = "assets/audio/Blood_on_the_Asphalt_17_bLiNd_vs._Leifo_Urban_Uppercut_(Sagat_Stage).mp3"
      audio.loop = true;
      
      // set object references 
      playbtn = document.getElementById("playpausebtn");
      mutebtn = document.getElementById("mutebtn")
      // add event handleing
      playbtn.addEventListener("click", playPause);
      mutebtn.addEventListener("click", mute);
      //functions
      function playPause(){
        if(audio.paused){
          audio.play();
        
        }else{
          audio.pause();
        }
      };
      function mute(){
        if(audio.muted){
          audio.muted = false;
        }else{
          audio.muted = true;
        }
      };
    }
    window.addEventListener("load", initAudioPlayer);