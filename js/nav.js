$(".navbar-toggle").click(function() {
	if(bol) {
		t = 0;
		times();
		boll1 = false;
		$("header").css("margin-bottom", "240px");
		bol = false;
		$(".navbar-nav").css("display","block");
		li.css({
			"float":"none",
			"margin":"auto"
		});
		$("#navbar").css("display","block");
		$(".navbar-toggle").css("display","none");
	} else {
		t = 0;
		times();
		$("header").css("margin-bottom", "0px");
		$("#navbar").css("display","none");
		for (var i = 0;i < li.length;i++) {
			li.get(i).removeAttribute("style");
		}
		$(".navbar-toggle").css("display","none");
		bol = true;
		//location.reload(false);
	}
	$("#navbar").css("transition", "0.5s");
	$("header").css("transition", "0.5s");
})
var a1a = 0;
function weizao () {
	a1a++;
	if ($(window).innerWidth() + 15 >= 768) {
		$(".navbar-toggle").css("display","none");
		$(".weizao").css("display","none");
	}else if ($(window).innerWidth() + 15 < 768) {
		if (t == 1) {
			$(".navbar-toggle").css("display","block");
			$(".weizao").css("display","none");
		}
		else if (t == 0) {
			$(".navbar-toggle").css("display","none");
			$(".weizao").css("display","block");
		}
	}
	if (a1a > 1000) {
		a1a = 0;
	}
	window.requestAnimationFrame(weizao);
}weizao();
var li = $(".navbar-nav li");
if ($(window).innerWidth() + 15 >= 768) {
	li.eq(4).insertBefore(li.eq(3));
	li.eq(5).insertBefore(li.eq(4));
}
var boll1 = true;
window.onresize = function () {
	if ($(window).innerWidth() + 15 < 768) {
		li.css({
			"float":"none"
		})
		li.eq(3).insertBefore(li.eq(4));
		li.eq(4).insertBefore(li.eq(5));
	}
	if ($(window).innerWidth() + 15 >= 768) {
		li.eq(4).insertBefore(li.eq(3));
		li.eq(5).insertBefore(li.eq(4));
		li.eq(0).css("float","left");
		li.eq(1).css("float","left");
		li.eq(2).css("float","left");
		li.eq(3).css("float","right");
		li.eq(4).css("float","right");
		li.eq(5).css("float","right");
		for (var i = 0;i < 3;i++) {
			li.get(i).setAttribute("style","float:left;");
		}
		for (var j = 3;j < 6;j++) {
			li.get(j).setAttribute("style","float:right;");
		}
		$(".navbar-nav").css("display","block");
		$("header").css("margin-bottom", "0px");
		boll1 = true;
		bol = true;
	}
	if ($(window).innerWidth() + 15 < 768 && boll1) {
		$(".navbar-nav").css("display","none");
		boll1 = false;
	}
}
var t = 1;
function times () {
	var time = setTimeout(function () {
		t = 1;
	},500)
}
console.log(t);