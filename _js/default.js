// JavaScript Document
// Filename: default.js

//$(function() {
	//$('body').addClass('js');
//});





$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 1) {
		$('body').addClass('scrolled');
	} else {
		$('body').removeClass('scrolled');
	}
});





var pass_marker_bottom = $('.pass_marker').offset().top + $('.pass_marker').height();

$(window).on('scroll', function() {
	stop = Math.round($(window).scrollTop());
	if (stop > pass_marker_bottom) {
		$('body').addClass('passed');
	} else {
		$('body').removeClass('passed');
	}
});





window.onload = function() {
	H5F.setup($('form'));
}





$(function() {
	$('p').horunge({
		words: 2
	});
});





$('body').delay(120000).queue(function() { /* two minutes delay */
	$(this).addClass('scrolled');
});





wow = new WOW(
	{
		offset: 100,
		mobile: false
	}
);
wow.init();





//$(document).ready(function() {
	$('html').css('display', 'none');
	$('html').fadeIn(666);
	
	$('a.fade_page').click(function(event) {
		event.preventDefault();
		linkLocation = this.href;
		$('html').fadeOut(333, redirectPage);		
	});
	
	function redirectPage() {
		window.location = linkLocation;
	}
//});