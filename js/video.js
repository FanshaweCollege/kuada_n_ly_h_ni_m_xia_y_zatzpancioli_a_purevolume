
	var theVideo = document.querySelector("video"); // get the video element
	var theControls = document.querySelector(".controls"); // get the custom controls container
	var currentSource; // gets the source of the currently-playing video
	var theExt = '.mp4';
	
	var buttonGroup = document.querySelectorAll(".vidLoader");
	var pPlay = document.querySelector("input");
	var video1=document.getElementById("videoPlay1");

video1.onclick=function(){
    if(video1.paused){
        video1.play();
    }else{
        video1.pause();
    }
}

