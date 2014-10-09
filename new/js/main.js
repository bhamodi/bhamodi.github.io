/* Main INIT Function
-------------------------------------------------------------- */

function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){
			var	parentHeight = $(window).height(),
				heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});
	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();
};

/* Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){
	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();
});