var Width = document.documentElement.clientWidth;
var Height = document.documentElement.clientHeight;
var jieshao13 = document.getElementsByClassName("Chanpin_jieshao");
var jieshao24 = document.getElementsByClassName("Chanpin_jieshao2");
var logo13 = document.getElementsByClassName("Chanpin_logo");
var bol = true;
var logo24 = document.getElementsByClassName("Chanpin_logo2");
if (window.navigator.userAgent.indexOf("Mobile") > -1) {
	if (Width >= 650 && Width < 1000) {
		jieshao13[1].style.display = "none";
		jieshao24[1].style.display = "none";
		logo13[1].style.opacity = "0";
		logo13[1].style.filter = "alpha(0)";
		logo24[1].style.opacity = "0";
		logo24[1].style.filter = "alpha(0)";
	}
	if (Width >= 320 && Width < 650) {
		jieshao13[1].style.display = "none";
		jieshao24[0].style.display = "none";
		jieshao24[1].style.display = "none";
		logo13[1].style.opacity = "0";
		logo13[1].style.filter = "alpha(0)";
		logo24[0].style.opacity = "0";
		logo24[0].style.filter = "alpha(0)";
		logo24[1].style.opacity = "0";
		logo24[1].style.filter = "alpha(0)";
	}
}else{
	if (Width >= 1428) {
		jieshao13[0].style.display = "none";
		jieshao13[1].style.display = "none";
		jieshao24[0].style.display = "none";
		jieshao24[1].style.display = "none";
		logo13[0].style.opacity = "0";
		logo13[0].style.filter = "alpha(0)";
		logo13[1].style.opacity = "0";
		logo13[1].style.filter = "alpha(0)";
		logo24[0].style.opacity = "0";
		logo24[0].style.filter = "alpha(0)";
		logo24[1].style.opacity = "0";
		logo24[1].style.filter = "alpha(0)";
	}else if (Width < 1428 && Width >= 880) {
		jieshao13[1].style.display = "none";
		jieshao24[0].style.display = "none";
		jieshao24[1].style.display = "none";
		logo13[1].style.opacity = "0";
		logo13[1].style.filter = "alpha(0)";
		logo24[0].style.opacity = "0";
		logo24[0].style.filter = "alpha(0)";
		logo24[1].style.opacity = "0";
		logo24[1].style.filter = "alpha(0)";
	}else if (Width < 880 && Width >= 320) {
		jieshao13[1].style.display = "none";
		jieshao24[1].style.display = "none";
		logo13[1].style.opacity = "0";
		logo13[1].style.filter = "alpha(0)";
		logo24[1].style.opacity = "0";
		logo24[1].style.filter = "alpha(0)";
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
		}else if (Width > 1427 && Width <= 1500) {
			widmax1500(scrollTop);
		}else if (Width > 1200 && Width <= 1427) {
			widmax1427(scrollTop);
		}else if (Width > 1000 && Width <= 1200) {
			widmax1200(scrollTop);
		}else if (Width > 879 && Width <= 1000) {
			widmax1000(scrollTop);
		}else if (Width <=879) {
			widmax879(scrollTop);
		}
	}
}
function widmax1905 (obj) {
	if (obj >= 260) {
		jieshao13[0].style.display = "block";
		logo13[0].style.opacity = "1";
		logo13[0].style.filter = "alpha(100)";
		logo13[0].style.transition = "1s";
	}
	if (obj >= 772) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 1204) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 1564) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax1700 (obj) {
	if (obj >= 220) {
		jieshao13[0].style.display = "block";
		logo13[0].style.opacity = "1";
		logo13[0].style.filter = "alpha(100)";
		logo13[0].style.transition = "1s";
	}
	if (obj >= 580) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 924) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 1271) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax1500 (obj) {
	if (obj >= 232) {
		jieshao13[0].style.display = "block";
		logo13[0].style.opacity = "1";
		logo13[0].style.filter = "alpha(100)";
		logo13[0].style.transition = "1s";
	}
	if (obj >= 590) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 916) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 1240) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax1427 (obj) {
	if (obj >= 509) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 864) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 1212) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax1200 (obj) {
	if (obj >= 332) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 624) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 896) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax1000 (obj) {
	if (obj >= 244) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 536) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 796) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function widmax879 (obj) {
	if (obj >= 348) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 616) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile768 (obj) {
	if (obj >= 260) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 560) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile414 (obj) {
	if (obj >= 192) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 448) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 696) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile393 (obj) {
	if (obj >= 304) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 552) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 868) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile384 (obj) {
	if (obj >= 312) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 584) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 844) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile375 (obj) {
	if (obj >= 244) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 488) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 752) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile360 (obj) {
	if (obj >= 296) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 568) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 820) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
function mobile320 (obj) {
	if (obj >= 208) {
		jieshao24[0].style.display = "block";
		logo24[0].style.opacity = "1";
		logo24[0].style.filter = "alpha(100)";
		logo24[0].style.transition = "1s";
	}
	if (obj >= 588) {
		jieshao13[1].style.display = "block";
		logo13[1].style.opacity = "1";
		logo13[1].style.filter = "alpha(100)";
		logo13[1].style.transition = "1s";
	}
	if (obj >= 856) {
		jieshao24[1].style.display = "block";
		logo24[1].style.opacity = "1";
		logo24[1].style.filter = "alpha(100)";
		logo24[1].style.transition = "1s";
	}
}
if (window.navigator.userAgent.indexOf("Mobile") > -1 && Width <= 340) {
	$(".Chanpin_logo2").eq(0).insertBefore($(".Chanpin_jieshao2").eq(0));
	$(".Chanpin_logo2").eq(1).insertBefore($(".Chanpin_jieshao2").eq(1));
	$(".Chanpin_jieshao").css({
		width: "80%",
		float: "none",
		margin: "10px auto 0",
		height: "120px"
//		position: "absolute"
	});
	$(".Chanpin_jieshao2").css({
		width: "80%",
		float: "none",
		margin: "10px auto 0",
		height: "none"
		
//		position: "absolute"
	});
	$(".Chanpin_logo").css({
		float: "none",
		margin: "auto",
//		position: "absolute"
	});
	$(".Chanpin_logo2").css({
		float: "none",
		margin: "auto",
//		position: "absolute"
	});
	$(".Chanpin_jieshao>p").css({
		textIndent: "1em",
		textAlign: "justify"
	});
	$(".Chanpin_jieshao2>p").css({
		textIndent: "1em",
		textAlign: "justify"
	});
	$(".Chanpin_jieshao>input").css("margin-left","150px");
	$(".Chanpin_jieshao2>input").css("margin-left","150px");
}



















