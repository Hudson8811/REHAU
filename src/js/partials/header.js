
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.header-nav').toggleClass('header-nav--active');
		$('.header-wrapper').toggleClass('header-wrapper--active');
		$('body').toggleClass('compensate-for-scrollbar')
	});


});