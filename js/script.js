const date = document.querySelector(".date");
const time = document.querySelector(".time");
const full_screen = document.querySelector(".go2top");
const nav_home = document.querySelector("nav");
const tasks = document.getElementsByTagName("textarea")[0];

if (localStorage.getItem("data")) {
	tasks.innerHTML = localStorage.getItem("data");
}

setInterval(updateTime, 1000);

function updateTime() {
	var currentTime = new Date();
	time.innerText = currentTime.toTimeString().substr(0, 8);
	date.innerText = currentTime.toDateString();
}

full_screen.addEventListener("click", function () {
	if (
		!document.fullscreenElement && // alternative standard method
		!document.mozFullScreenElement &&
		!document.webkitFullscreenElement
	) {
		// current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(
				Element.ALLOW_KEYBOARD_INPUT
			);
		}
		nav_home.style.display = "none";
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
		nav_home.style.display = "block";
	}
});

//add addEventListener if text changed
tasks.addEventListener("input", function () {
	localStorage.setItem("data", tasks.value);
});
