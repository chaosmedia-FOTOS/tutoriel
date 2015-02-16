$(document).ready(function(){
	$(window).scroll(miniParallaxe).resize(miniParallaxe);
})

function miniParallaxe(){
	var percent = $(window).scrollTop() / Math.max(10000 ,$("body").height()) * 100;
	$("body").css("background-position", "0 " + percent + "%");
}