// get the id of the video element
var video = document.getElementById("thesis-video");

// get the id of the Play button
var playButton = document.getElementById("video-play");

// Toggle play/pause when the button (or the video) is clicked
function playPause() { 
    if (video.paused){
        video.play();
        playButton.style.display = 'none';  // hide button during play
    }
    else {
        video.pause();
        playButton.style.display = 'block'; // show button when paused
    }
}