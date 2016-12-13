/*=========测试排版用==========*/
//var div = document.getElementsByClassName("aaa");
//div[0].style.position = "fixed";
//div[1].style.position = "fixed";
//div[0].style.width = "100px";
//div[0].style.height = "20px";
//div[0].style.zIndex = "1000";
//div[0].style.top = "0px";
//div[0].style.left = "0px";
//div[1].style.width = "100px";
//div[1].style.height = "20px";
//div[1].style.zIndex = "1000";
//div[1].style.top = "20px";
//div[1].style.left = "0px";
//window.onresize = function () {
//	div[1].innerHTML = "offsetW:" + document.documentElement.clientWidth + "px";
//}
/*=============================*/
/*=========index3页面移动端排版用==========*/
var shengchan = document.getElementsByClassName("ShengChan_GuoCheng");
var Width = document.documentElement.clientWidth;
var Height = document.documentElement.clientHeight;
var ss = document.getElementsByClassName("ss")[0];
var colxs6 = document.getElementsByClassName("col-xs-6");
var about = document.getElementsByClassName("about");
var colxs12 = document.getElementsByClassName("col-xs-12");
var bol = true;
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (document.documentElement.offsetWidth < 668) {
		ss.insertBefore(colxs12[1],colxs6[1]);
	}
}
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (Width < 668) {
		about[0].style.display = "none";
		about[1].style.display = "none";
		about[2].style.display = "none";
		about[3].style.display = "none";
		about[4].style.display = "none";
		about[5].style.display = "none";
	}
}else{
	if (Width >= 1025) {
		about[2].style.display = "none";
		about[3].style.display = "none";
		about[4].style.display = "none";
		about[5].style.display = "none";
	}else if (Width < 1025 && Width >= 770) {
		about[4].style.display = "none";
		about[5].style.display = "none";
	}else if (Width < 770 && Width >= 320) {
		about[4].style.display = "none";
		about[5].style.display = "none";
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
		if (Width > 1024 && Width <= 1921) {
			widmax1905(scrollTop);
		}else if (Width > 770 && Width <= 1024) {
			widmax1024(scrollTop);
		}else if (Width <=770) {
			widmax770(scrollTop);
		}
	}
/*=========测试排版用==========*/
//	div[0].innerHTML = scrollTop + "px" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "clientW:" + document.documentElement.clientWidth + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "clientH:" + document.documentElement.clientHeight;
/*=============================*/
}
function widmax1905 (obj) {
	if (obj >= 376) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 672) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function widmax1024 (obj) {
	if (obj >= 328) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function widmax770 (obj) {
	if (obj >= 164) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile668 (obj) {
	if (obj >= 100) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 600) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 960) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile414 (obj) {
	if (obj >= 172) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 696) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 1180) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile393 (obj) {
	if (obj >= 236) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 724) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 1140) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile384 (obj) {
	if (obj >= 236) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 756) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 1180) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile375 (obj) {
	if (obj >= 168) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 648) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 1100) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile360 (obj) {
	if (obj >= 188) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 620) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 1060) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}
function mobile320 (obj) {
	if (obj >= 192) {
		about[0].style.display = "block";
		about[1].style.display = "block";
	}
	if (obj >= 606) {
		about[2].style.display = "block";
		about[3].style.display = "block";
	}
	if (obj >= 992) {
		about[4].style.display = "block";
		about[5].style.display = "block";
	}
}

















