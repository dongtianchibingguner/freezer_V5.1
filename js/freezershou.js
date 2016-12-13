var Width = document.documentElement.clientWidth;
var Height = document.documentElement.clientHeight;
var tupiao = document.getElementById("head").getElementsByTagName("img")[0];
var mangguo = document.getElementById("shuiguo").getElementsByClassName("mangguo");
var th_1 = document.getElementById("th_top").getElementsByTagName("img")[0];
var banner = document.getElementById("th_banner").getElementsByClassName("first");
var bol = true;
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (Width >= 650 && Width < 1000) {
		none();
	}
	if (Width >= 360 && Width < 650) {
		mangguo[2].style.display = "none";
		mangguo[3].style.display = "none";
		th_1.style.display = "none";
		for (var i = 0;i < banner.length;i++) {
			banner[i].style.display = "none";
		}
	}
	if (Width >= 320 && Width < 360) {
		mangguo[1].style.display = "none";
		mangguo[2].style.display = "none";
		mangguo[3].style.display = "none";
		th_1.style.display = "none";
		for (var i = 0;i < banner.length;i++) {
			banner[i].style.display = "none";
		}
	}
}else{
	if (Width >= 1000) {
		tupiao.style.display = "none";
		for (var i = 0;i <mangguo.length;i++) {
			mangguo[i].style.display = "none";
		}
		th_1.style.display = "none";
		for (var i = 0;i < banner.length;i++) {
			banner[i].style.display = "none";
		}
	}else if (Width < 1000 && Width >= 650) {
		mangguo[2].style.display = "none";
		mangguo[3].style.display = "none";
		th_1.style.display = "none";
		for (var i = 0;i < banner.length;i++) {
			banner[i].style.display = "none";
		}
	}else if (Width < 650 && Width >= 320) {
		none();
	}
}
function none () {
	th_1.style.display = "none";
	for (var i = 0;i < banner.length;i++) {
		banner[i].style.display = "none";
	}
}
window.onscroll = function  () {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//浏览器兼容
	if (window.navigator.userAgent.indexOf("Mobile") > -1) {
		if (Width <= 769 && Width > 650) {
			mobile768(scrollTop);
		}
		if (Width >= 414 && Width <= 650) {
			mobile414(scrollTop);
		}
		if (Width >= 393 && Width < 414) {
			mobile393(scrollTop);
		}
		if (Width >= 384 && Width < 393) {
			mobile384(scrollTop);
		}
		if (Width >= 375 && Width < 384) {
			mobile375(scrollTop);
		}
		if (Width >= 360 && Width < 393) {
			mobile360(scrollTop);
		}
		if (Width >= 320 && Width < 360) {
			mobile320(scrollTop);
		}
	}else{
		if (Width > 1705 && Width <= 2000) {
			widmax1905(scrollTop);
		}else if (Width > 1600 && Width <= 1705) {
			widmax1705(scrollTop);
		}else if (Width > 1299 && Width <= 1600) {
			widmax1600(scrollTop);
		}else if (Width > 1000 && Width <= 1299) {
			widmax1257(scrollTop);
		}else if (Width > 768 && Width <= 1000) {
			widmax1000(scrollTop);
		}else if (Width > 585 && Width <= 768) {
			widmax768(scrollTop);
		}else if (Width <=585) {
			widmax550(scrollTop);
		}
	}
}
function widmax1905 (obj) {
	if (obj >= 320) {
		tupiao.style.display = "block";
	}
	if (obj >= 620) {
		for (var i = 0;i <mangguo.length;i++) {
			mangguo[i].style.display = "block";
		}
	}
	if (obj >= 1690) {
		th_1.style.display = "block";
	}
	if (obj >= 2012) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax1705 (obj) {
	if (obj >= 204) {
		tupiao.style.display = "block";
	}
	if (obj >= 500) {
		for (var i = 0;i <mangguo.length;i++) {
			mangguo[i].style.display = "block";
		}
	}
	if (obj >= 1452) {
		th_1.style.display = "block";
	}
	if (obj >= 1925) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax1600 (obj) {
	if (obj >= 180) {
		tupiao.style.display = "block";
	}
	if (obj >= 440) {
		for (var i = 0;i <mangguo.length;i++) {
			mangguo[i].style.display = "block";
		}
	}
	if (obj >= 1236) {
		th_1.style.display = "block";
	}
	if (obj >= 1532) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax1257 (obj) {
	if (obj >= -1) {
		tupiao.style.display = "block";
	}
	if (obj >= 280) {
		mangguo[0].style.display = "block";
		mangguo[1].style.display = "block";
	}
	if (obj >= 628) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 1200) {
		th_1.style.display = "block";
	}
	if (obj >= 1432) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax1000 (obj) {
	if (obj >= 364) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 980) {
		th_1.style.display = "block";
	}
	if (obj >= 1220) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax768 (obj) {
	if (obj >= 364) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 956) {
		th_1.style.display = "block";
	}
	if (obj >= 1031) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function widmax550 (obj) {
	if (obj >= 956) {
		th_1.style.display = "block";
	}
	if (obj >= 1031) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function mobile768 (obj) {
	if (obj >= 792) {
		th_1.style.display = "block";
	}
	if (obj >= 980) {
		for (var i = 0;i <banner.length;i++) {
			banner[i].style.display = "block";
		}
	}
}
function mobile414 (obj) {
	if (obj >= 300) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 990) {
		th_1.style.display = "block";
	}
	if (obj >= 1240) {
		banner[0].style.display = "block";
	}
	if (obj >= 1536) {
		banner[1].style.display = "block";
	}
	if (obj >= 1820) {
		banner[2].style.display = "block";
	}
}
function mobile393 (obj) {
	if (obj >= 372) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 1072) {
		th_1.style.display = "block";
	}
	if (obj >= 1272) {
		banner[0].style.display = "block";
	}
	if (obj >= 1620) {
		banner[1].style.display = "block";
	}
	if (obj >= 1872) {
		banner[2].style.display = "block";
	}
}
function mobile384 (obj) {
	if (obj >= 348) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 1040) {
		th_1.style.display = "block";
	}
	if (obj >= 1272) {
		banner[0].style.display = "block";
	}
	if (obj >= 1572) {
		banner[1].style.display = "block";
	}
	if (obj >= 1848) {
		banner[2].style.display = "block";
	}
}
function mobile375 (obj) {
	if (obj >= 352) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 1020) {
		th_1.style.display = "block";
	}
	if (obj >= 1248) {
		banner[0].style.display = "block";
	}
	if (obj >= 1536) {
		banner[1].style.display = "block";
	}
	if (obj >= 1820) {
		banner[2].style.display = "block";
	}
}
function mobile360 (obj) {
	if (obj >= 364) {
		mangguo[2].style.display = "block";
		mangguo[3].style.display = "block";
	}
	if (obj >= 948) {
		th_1.style.display = "block";
	}
	if (obj >= 1192) {
		banner[0].style.display = "block";
	}
	if (obj >= 1472) {
		banner[1].style.display = "block";
	}
	if (obj >= 1776) {
		banner[2].style.display = "block";
	}
}
function mobile320 (obj) {
	if (obj >= 480) {
		mangguo[1].style.display = "block";
	}
	if (obj >= 816) {
		mangguo[2].style.display = "block";
	}
	if (obj >= 1180) {
		mangguo[3].style.display = "block";
	}
	if (obj >= 1708) {
		th_1.style.display = "block";
	}
	if (obj >= 1920) {
		banner[0].style.display = "block";
	}
	if (obj >= 2140) {
		banner[1].style.display = "block";
	}
	if (obj >= 2360) {
		banner[2].style.display = "block";
	}
}
