;(function ($) {
	var moreOptionBtn = $(".more-option");
	var secondForm = $(".second-form");
	var serchIc = $(".serch-ic");
	

	serchIc.on("click", function (){
		serchIc.toggleClass("open");
		alert("крик ура");
	});

	moreOptionBtn.on("click", function (){
		secondForm.slideToggle();
		moreOptionBtn.toggleClass("open");
	});

	//init slick slider
	$('.areas-slick-js').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	});
})(jQuery);