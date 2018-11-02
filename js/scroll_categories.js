$(document).ready(function(){

	var current_clicked_id = "scroll_cat1";

	function setDarkDot(id) {
		current_clicked_id = id;
		$(".scroll_categories > a > i").removeClass("fas fa-dot-circle").addClass("far fa-circle"); //Supprime le point noir de tous les cat.
		$("#" + id + " > i").addClass("fas fa-circle"); //Ajout du point noir.
	}

	// Scroll Boutons
	$(".scroll_categories > a").mouseover(function(){
		if (current_clicked_id != this.id) {
			$(this).find("i").removeClass("far fa-circle").addClass("far fa-dot-circle");
		}
	});

	$(".scroll_categories > a").mouseout(function(){
		$(this).find("i").removeClass("far fa-dot-circle").addClass("far fa-circle");
	});

	// $(".scroll_categories > a").click(function(){
	// 	current_clicked_id = this.id;
	// 	$(this).find("i").removeClass("far fa-dot-circle fa-circle").addClass("fas fa-circle");

	// 	$(this).siblings().find("i").removeClass("fas fa-dot-circle").addClass("far fa-circle"); //Supprime le point noir pour les autres cat.
	// });

	// // Bouton go top
	// $(".gotopbtn").click(function(){
	// 	setDarkDot("scroll_cat1");
	// });

	// Liens navbar
	// $(".nav-link").click(function(){
	// 	if (this.text == "Cat1") {
	// 		setDarkDot("scroll_cat1");
	// 	}
	// 	else if (this.text == "Cat2") {
	// 		setDarkDot("scroll_cat2");
	// 	}
	// 	else if (this.text == "Cat3") {
	// 		setDarkDot("scroll_cat3");
	// 	}
	// });

	// Scroll case
	$(window).scroll(function(){
		
		if ($(this).scrollTop() < $("#cat2").offset().top - 5) {
			setDarkDot("scroll_cat1");
		}
		else if ($(this).scrollTop() < $("#cat3").position().top - 5){
			setDarkDot("scroll_cat2");
		}
		else {
			setDarkDot("scroll_cat3");
		}
	});
});