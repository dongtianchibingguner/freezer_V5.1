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
var sheng1 = document.getElementsByClassName("ShengChan_JieShao")[0].getElementsByTagName("p")[0];
var sheng2 = document.getElementsByClassName("ShengChan_JieShao")[1].getElementsByTagName("p")[0];
var sheng3 = document.getElementsByClassName("ShengChan_JieShao")[2].getElementsByTagName("p")[0];
var sheng4 = document.getElementsByClassName("ShengChan_JieShao")[3].getElementsByTagName("p")[0];
var sheng5 = document.getElementsByClassName("ShengChan_JieShao")[4].getElementsByTagName("p")[0];
var sheng6 = document.getElementsByClassName("ShengChan_JieShao")[5].getElementsByTagName("p")[0];
var bol = true;
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (document.documentElement.offsetWidth < 680) {
		shengchan[1].insertBefore(shengchan[1].getElementsByTagName("div")[1],shengchan[1].getElementsByTagName("div")[0])
		shengchan[3].insertBefore(shengchan[3].getElementsByTagName("div")[1],shengchan[3].getElementsByTagName("div")[0])
		shengchan[5].insertBefore(shengchan[5].getElementsByTagName("div")[1],shengchan[5].getElementsByTagName("div")[0])
	}
}
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (Width >= 650 && Width < 1000) {
		sheng4.style.display = "none";
		sheng5.style.display = "none";
		sheng6.style.display = "none";
	}
	if (Width >= 320 && Width < 650) {
		sheng1.style.display = "none";
		sheng2.style.display = "none";
		sheng3.style.display = "none";
		sheng4.style.display = "none";
		sheng5.style.display = "none";
		sheng6.style.display = "none";
	}
}else{
	if (Width >= 1400) {
		sheng2.style.display = "none";
		sheng3.style.display = "none";
		sheng4.style.display = "none";
		sheng5.style.display = "none";
		sheng6.style.display = "none";
	}else if (Width < 1400 && Width >= 762) {
		sheng3.style.display = "none";
		sheng4.style.display = "none";
		sheng5.style.display = "none";
		sheng6.style.display = "none";
	}else if (Width < 762 && Width >= 320) {
		sheng3.style.display = "none";
		sheng4.style.display = "none";
		sheng5.style.display = "none";
		sheng6.style.display = "none";
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
		if (Width > 1700 && Width <= 1921) {
			widmax1905(scrollTop);
		}else if (Width > 1500 && Width <= 1700) {
			widmax1700(scrollTop);
		}else if (Width > 1399 && Width <= 1500) {
			widmax1500(scrollTop);
		}else if (Width > 1200 && Width <= 1399) {
			widmax1399(scrollTop);
		}else if (Width > 1000 && Width <= 1200) {
			widmax1200(scrollTop);
		}else if (Width > 879 && Width <= 1000) {
			widmax1000(scrollTop);
		}else if (Width <=879) {
			widmax879(scrollTop);
		}
	}
/*=========测试排版用==========*/
//	div[0].innerHTML = scrollTop + "px" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "clientW:" + document.documentElement.clientWidth + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "clientH:" + document.documentElement.clientHeight;
/*=============================*/
}
function widmax1905 (obj) {
	if (obj >= 343) {
		sheng2.style.display = "block";
	}
	if (obj >= 776) {
		sheng3.style.display = "block";
	}
	if (obj >= 1132) {
		sheng4.style.display = "block";
	}
	if (obj >= 1528) {
		sheng5.style.display = "block";
	}
	if (obj >= 1948) {
		sheng6.style.display = "block";
	}
}
function widmax1700 (obj) {
	if (obj >= 248) {
		sheng2.style.display = "block";
	}
	if (obj >= 588) {
		sheng3.style.display = "block";
	}
	if (obj >= 940) {
		sheng4.style.display = "block";
	}
	if (obj >= 1288) {
		sheng5.style.display = "block";
	}
	if (obj >= 1676) {
		sheng6.style.display = "block";
	}
}
function widmax1500 (obj) {
	if (obj >= 196) {
		sheng2.style.display = "block";
	}
	if (obj >= 500) {
		sheng3.style.display = "block";
	}
	if (obj >= 796) {
		sheng4.style.display = "block";
	}
	if (obj >= 1104) {
		sheng5.style.display = "block";
	}
	if (obj >= 1404) {
		sheng6.style.display = "block";
	}
}
function widmax1399 (obj) {
	if (obj >= 452) {
		sheng3.style.display = "block";
	}
	if (obj >= 748) {
		sheng4.style.display = "block";
	}
	if (obj >= 1008) {
		sheng5.style.display = "block";
	}
	if (obj >= 1316) {
		sheng6.style.display = "block";
	}
}
function widmax1200 (obj) {
	if (obj >= 312) {
		sheng3.style.display = "block";
	}
	if (obj >= 568) {
		sheng4.style.display = "block";
	}
	if (obj >= 852) {
		sheng5.style.display = "block";
	}
	if (obj >= 1088) {
		sheng6.style.display = "block";
	}
}
function widmax1000 (obj) {
	if (obj >= 244) {
		sheng3.style.display = "block";
	}
	if (obj >= 456) {
		sheng4.style.display = "block";
	}
	if (obj >= 656) {
		sheng5.style.display = "block";
	}
	if (obj >= 852) {
		sheng6.style.display = "block";
	}
}
function widmax879 (obj) {
	if (obj >= 180) {
		sheng3.style.display = "block";
	}
	if (obj >= 428) {
		sheng4.style.display = "block";
	}
	if (obj >= 644) {
		sheng5.style.display = "block";
	}
	if (obj >= 820) {
		sheng6.style.display = "block";
	}
}
function mobile768 (obj) {
	if (obj >= 216) {
		sheng4.style.display = "block";
	}
	if (obj >= 380) {
		sheng5.style.display = "block";
	}
	if (obj >= 648) {
		sheng6.style.display = "block";
	}
}
function mobile414 (obj) {
	if (obj >= 228) {
		sheng1.style.display = "block";
	}
	if (obj >= 688) {
		sheng2.style.display = "block";
	}
	if (obj >= 1160) {
		sheng3.style.display = "block";
	}
	if (obj >= 1668) {
		sheng4.style.display = "block";
	}
	if (obj >= 2044) {
		sheng5.style.display = "block";
	}
	if (obj >= 2504) {
		sheng6.style.display = "block";
	}
}
function mobile393 (obj) {
	if (obj >= 300) {
		sheng1.style.display = "block";
	}
	if (obj >= 796) {
		sheng2.style.display = "block";
	}
	if (obj >= 1276) {
		sheng3.style.display = "block";
	}
	if (obj >= 1748) {
		sheng4.style.display = "block";
	}
	if (obj >= 2176) {
		sheng5.style.display = "block";
	}
	if (obj >= 2616) {
		sheng6.style.display = "block";
	}
}
function mobile384 (obj) {
	if (obj >= 312) {
		sheng1.style.display = "block";
	}
	if (obj >= 808) {
		sheng2.style.display = "block";
	}
	if (obj >= 1276) {
		sheng3.style.display = "block";
	}
	if (obj >= 1736) {
		sheng4.style.display = "block";
	}
	if (obj >= 2188) {
		sheng5.style.display = "block";
	}
	if (obj >= 2636) {
		sheng6.style.display = "block";
	}
}
function mobile375 (obj) {
	if (obj >= 280) {
		sheng1.style.display = "block";
	}
	if (obj >= 728) {
		sheng2.style.display = "block";
	}
	if (obj >= 1292) {
		sheng3.style.display = "block";
	}
	if (obj >= 1684) {
		sheng4.style.display = "block";
	}
	if (obj >= 2200) {
		sheng5.style.display = "block";
	}
	if (obj >= 2632) {
		sheng6.style.display = "block";
	}
}
function mobile360 (obj) {
	if (obj >= 304) {
		sheng1.style.display = "block";
	}
	if (obj >= 724) {
		sheng2.style.display = "block";
	}
	if (obj >= 1168) {
		sheng3.style.display = "block";
	}
	if (obj >= 1616) {
		sheng4.style.display = "block";
	}
	if (obj >= 2060) {
		sheng5.style.display = "block";
	}
	if (obj >= 2488) {
		sheng6.style.display = "block";
	}
}
function mobile320 (obj) {
	if (obj >= 360) {
		sheng1.style.display = "block";
	}
	if (obj >= 744) {
		sheng2.style.display = "block";
	}
	if (obj >= 1204) {
		sheng3.style.display = "block";
	}
	if (obj >= 1644) {
		sheng4.style.display = "block";
	}
	if (obj >= 2040) {
		sheng5.style.display = "block";
	}
	if (obj >= 2403) {
		sheng6.style.display = "block";
	}
}




