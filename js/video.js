
	var theVideo = document.querySelector("video"); // get the video element
	var theControls = document.querySelector(".controls"); // get the custom controls container
	var currentSource; // gets the source of the currently-playing video
	var theExt = '.mp4';
	
	var buttonGroup = document.querySelectorAll(".vidLoader");
	var volumeUp = document.querySelector("#volUp");
	var volumeDown = document.querySelector("#volDown");
	var muteVideo = document.querySelector("#volMute");
	var pPlay = document.querySelector("input");
	
	
	theControls.classList.toggle("hideMe");
	theVideo.controls = false;

	function swapVideoSource(e) {
	theVideo.src = "video/" + e.target.id + theExt; // build the path to the new video file
	theVideo.load(); // load it
	theVideo.play(); // play it
	}


	function vidLouder() {
		if (theVideo.volume <= 1) {
		theVideo.volume += .2;
		}
		//console.log(theVideo.volume);
	}


	function vidSofter() {
		if (theVideo.volume >= 0) {
		theVideo.volume -= .2;
		}
	}


	function muteVid() {
		theVideo.volume = 0;
	}


	function pausePlay() {
		currentSource = theVideo.currentSrc; 
		 theExt = currentSource.substr(currentSource.lastIndexOf("."));
		 //console.log(theExt);
		if (theVideo.paused) {
			theVideo.play();
			pPlay.value = "Pause";
		} else {
			theVideo.pause();
			pPlay.value = "Play";
		}
	}


	volumeUp.addEventListener("click", vidLouder, false);
	volumeDown.addEventListener("click", vidSofter, false);
	muteVideo.addEventListener("click", muteVid, false);
	pPlay.addEventListener("click", pausePlay, false);
	//theVideo.addEventListener('ended',showMessage,false);

	for (i=0; i<buttonGroup.length; i++) {
		buttonGroup[i].addEventListener("click", swapVideoSource, false);
	}


