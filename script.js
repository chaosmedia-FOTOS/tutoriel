$(document).ready(function(){
	$(window).scroll(miniParallaxe).resize(miniParallaxe).load(miniParallaxe);
	$(".play-button-container").click(startVideo)
})

function miniParallaxe(){
	var percent = $(window).scrollTop() / Math.max(10000 ,$("body").height()) * 100;
	$("body").css("background-position", "0 " + percent + "%");
}

function startVideo(){
	$(this).hide().parent(".video-container").find("video").attr("controls", "").get(0).play();
}