// giong bai nobita set position

let noButton = document.getElementById("noBtn");
function noBtn() {
	let x = Math.round(Math.random() * window.innerWidth);
	let y = Math.round(Math.random() * window.innerHeight);
	noButton.style.left = x + "px";
	noButton.style.top = y + "px";
}
