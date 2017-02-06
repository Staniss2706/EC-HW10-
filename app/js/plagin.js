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
})(jQuery);