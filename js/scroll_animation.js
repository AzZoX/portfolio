$(document).ready(function(){

	$(window).scroll(function(){

		var topValue = ($(this).scrollTop() / $(document).height()) * $(".scroll_animation").height();
		$(".scroll_bar").css("top", topValue);
	});
});