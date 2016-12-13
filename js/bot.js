var di = document.getElementsByTagName("footer")[0];
var img = document.getElementById("di").getElementsByTagName("img");
var weixin = document.getElementById("weixin");
var erweima = document.getElementById("erweima");
var erweibol = true;
img[0].onmouseenter = function(){
	img[0].src = "img/facebook1.png";
}
img[1].onmouseenter = function(){
	img[1].src = "img/xinlang1.png";
}
img[2].onmouseenter = function(){
	img[2].src = "img/weixin1.png";
}
img[0].onmouseleave = function(){
	img[0].src = "img/facebook.png";
}
img[1].onmouseleave = function(){
	img[1].src = "img/xinlang.png";
}
img[2].onmouseleave = function(){
	img[2].src = "img/weixin.png";
}
weixin.onmouseenter = function () {
	erweima.style.display = "block";
	weixin.onmouseleave = function () {
		erweima.style.display = "none";
	}
}
weixin.onclick=function(){
	if (erweibol) {
		erweima.style.display = "block";
		erweibol = false;
	} else{
		erweima.style.display = "none";
		erweibol = true;
	}
}

/*
var erweima = document.createElement("img");
erweima.src = "img/erweima.png";
erweima.style.position = "absolute";
erweima.style.width = "10%";
erweima.className = "weixin_erweima";
erweima.style.opacity = "0";
di.appendChild(erweima);
//weixin.onclick = function() {
//	var erweimanum = document.getElementsByClassName("weixin_erweima")[0];
erweima.style.bottom = document.documentElement.clientHeight/2 + erweimanum.offsetHeight/2 + "px";
//	console.log(erweimanum.offsetHeight);
//	erweima.style.left = "40%";
//	erweima.style.display = "block";
//}
weixin.onmouseenter = function() {
//	erweima.src = "img/erweima.png";
//	erweima.style.position = "absolute";
	erweima.style.width = "10%";
	console.log(document.documentElement.clientHeight,erweima.clientHeight,document.documentElement.clientWidth,erweima.clientWidth);
	erweima.style.top = -document.documentElement.clientHeight + (2*erweima.clientHeight) + "px";
	erweima.style.left = document.documentElement.clientWidth - erweima.clientWidth + "px";
	erweima.style.opacity = "1";
	di.appendChild(erweima);
	weixin.onmouseout = function () {
//		erweima.style.display = "none";
		console.log(erweima);
	}
}
weixin.onclick = function() {
//	erweima.src = "img/erweima.png";
//	erweima.style.position = "absolute";
//	erweima.style.width = "10%";
	erweima.style.top = document.documentElement.offsetTop + "px";
	erweima.style.left = erweima.offsetWidth - document.documentElement.offsetLeft + "px";
	erweima.style.display = "block";
	di.appendChild(erweima);
}
*/