/* Dynamic Window Ajax Portfolio Content */
"use strict";

var $actual= null;
var obert=false;
$(".ch-grid").click(function() {
	obre($(this).attr('id'));
	$actual=$(this);
});
$(".folio-btn").click(function() {
	$(".project-window").slideUp("slow");
	obert=false;
});

obre('portfolio-01.html',1);

function obre(quin, dummy){
	$.ajax({
		url: quin,
		success: function(data) {					
			$('.project-content').html(data);
			$(".project-content").hide(0)
			$('.project-window').hide(0)	
			tanca();
			canvia();
			
			if(dummy!=1){
				$("html, body").animate({ scrollTop: $('#anchor5').offset().top }, 300, function(){
					$('.project-window').show(0);
					$('.project-window').animate({height:900}, 500,function(){
					$('.project-window').css('height','auto');
					$(".project-content").fadeIn("slow");
					});				
				});
			}
		}
	});
}

function tanca(){
	$(".close").click(function() {
		$(".project-window").slideUp("slow");
		$("html, body").animate({ scrollTop: $('#anchor5').offset().top }, 1000);
		obert=false;
	});
}

function seguent(){
	if($actual.next().hasClass('final')){
		$actual=$($('.inici').next());
	}else{
		$actual=$($actual.next());
	}
	if($actual.hasClass('isotope-hidden')){
		seguent();
	}else{
		obre($actual.attr('id'));
	}
}

function enrera(){
	if($actual.prev().hasClass('inici')){
		$actual=$($('.final').prev());
	}else{
		$actual=$($actual.prev());
	}
	if($actual.hasClass('isotope-hidden')){
		enrera();
	}else{
		obre($actual.attr('id'));
	}
}

function canvia(){
	$('.btn-next').click(function() {
		seguent();
		$("html, body").animate({ scrollTop: $('#project-show').offset().top }, 1000);
	});
	$('.btn-prev').click(function() {
		enrera();
		$("html, body").animate({ scrollTop: $('#project-show').offset().top }, 1000);
	});
}
