var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log('auto play is set to' + video.autoplay)
	console.log('loop is set to' + video.loop)
});

// document.querySelector("#play").addEventListener("click", function () {
// 	console.log("Play Video");
// });

var video = document.getElementById('player1');
video.autoplay = false;
video.loop = false;

var volumeSpan = document.getElementById('volume');
document.getElementById('play').addEventListener('click', function () {
	video.play();
	volumeSpan.textContent = (video.volume * 100).toFixed(0) + '%';
});


document.getElementById('play').addEventListener('click', function () {
	video.play();
	volumeSpan.textContent = video.volume * 100 + '%';
});


document.getElementById('pause').addEventListener('click', function () {
	video.pause();
});


document.getElementById('slower').addEventListener('click', function () {
	video.playbackRate *= 0.9;
	console.log('New speed is', video.playbackRate.toFixed(5));
});


document.getElementById('faster').addEventListener('click', function () {
	video.playbackRate /= 0.9;
	console.log('New speed is', video.playbackRate.toFixed(5));
});


document.getElementById('skip').addEventListener('click', function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the beginning");
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is", video.currentTime.toFixed(5));
});

document.getElementById('mute').addEventListener('click', function () {
	video.muted = !video.muted;
	this.textContent = video.muted ? 'Unmute' : 'Mute';
});

var slider = document.getElementById('slider');
slider.addEventListener('input', function () {
	video.volume = this.value / 100;
	volumeSpan.textContent = video.volume * 100 + '%';
});


document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.getElementById('vintage').addEventListener('click', function () {
	video.classList.add('oldSchool');
});

document.getElementById('orig').addEventListener('click', function () {
	video.classList.remove('oldSchool');
});