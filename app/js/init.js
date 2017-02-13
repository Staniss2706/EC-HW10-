;(function ($){

//init formstyler
    $('select').styler();
})(jQuery);

//slicknav
	$(function(){
		$('.header-nav').slicknav({
			label: "",
			prependTo: ".header .container",
		});
	});