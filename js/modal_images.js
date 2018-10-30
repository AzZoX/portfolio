$(document).ready(function(){	

	// Affiche le modal
	$(".cat_body img").click(function(){
	    $("#myModal").css("display", "block");
	    $(".modal-content").attr("src", $(this).attr("src"));

	    // Animation close_info
	    $(".close_info").css("animation-name", "close_info_anim");
	    $(".close_info").css("animation-duration", "0.5s");

	});

	// Ferme le modal
	$("#myModal").click(function(){
	    $("#myModal").css("display", "none");
	});
});