/* ====================================================================== */
/*	Animated header
/* ====================================================================== */

$(function () {
	var shrinkHeader = 150;
	$(window).scroll(function () {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader) {
			$('.navbar-fixed-top').addClass('shrink');
		}
		else {
			$('.navbar-fixed-top').removeClass('shrink');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});

/* ====================================================================== */
/*	Flexslider
/* ====================================================================== */

$(window).load(function () {
	$('.flexslider').flexslider({
		directionNav: false,
		slideshow: false
	});
});

$(window).load(function () {
	$('.team').flexslider({
		directionNav: false,
		prevText: "",
		nextText: "",
		manualControls: ".team .flex-control-nav li",
		slideshow: false
	});
});

$(window).load(function () {
	$('.quotes').flexslider({
		directionNav: true,
		prevText: "",
		nextText: "",
		slideshow: true
	});
});

$(window).load(function () {
	$('.portfolio-slides').flexslider({
		controlNav: true,
		directionNav: false,
		slideshow: true
	});
});

/* ====================================================================== */
/*	Magnific-Popup
/* ====================================================================== */

$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		focus: '#search'
	});

});

/* ====================================================================== */
/*	bxslider
/* ====================================================================== */

$(document).ready(function () {
	$('.bxslider').bxSlider({
		slideWidth: 180,
		minSlides: 2,
		maxSlides: 6,
		slideMargin: 0,
		pager: false,
		controls: false,
		auto: true,
		easing: 'ease-in'
	});
});

/* ====================================================================== */
/*	Portfolio expander
/* ====================================================================== */

$(document).ready(function () {
	$('.grid').colio({
		id: 'window',
		scrollOffset: 90,
		placement: 'before',
		onContent: function (content) {
			// init "flexslider" plugin
			$('.portfolio-slider', content).flexslider({ directionNav: false, animationSpeed: 300 });
		}
	});
});


/* ====================================================================== */
/*	Scrolling
/* ====================================================================== */
var height,
	pos,
	id_slide;

$(document).scroll(function () {
	pos = $(this).scrollTop();
	$(".menu_target").each(function () {
		id_slide = $(this).attr("id");
		height = $(this).css("height");
		var itemLoc = $(this).offset().top;
		if (itemLoc <= pos + 265) {
			$(".nav li").removeAttr("id");
			$(".nav li").find("a[href^='#" + id_slide + "']").parent().attr("id", "current_menu_item");
		}
	});
});


