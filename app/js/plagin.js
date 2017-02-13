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
		responsive: [
			{
				breakpoint: 1023,
				settings:{
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 767,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 479,
				settings:{
					slidesToShow: 1,
				}
			},
		]
	});
})(jQuery);